from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import generics, serializers, status
from .serializers import RoomSerializer, CreateRoomSerializer, UpdateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class GetRoom(APIView):
    serializer_class = RoomSerializer
    lookup_url = 'code'

    def get(self, request, format=None):
        code = request.GET.get(self.lookup_url)
        if code is not None:
            room = Room.objects.filter(code=code)
            if len(room) > 0:
                data = RoomSerializer(room[0]).data
                data['is_host'] = self.request.session.session_key == room[0].host
                return Response(data, status=status.HTTP_200_OK)
            else:
                return Response({'Bad Request': 'Room does not exist'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Bad Request': 'Code parameter not found'}, status=status.HTTP_400_BAD_REQUEST)


class JoinRoom(APIView):

    lookup_url = 'code'

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        code = request.data.get(self.lookup_url)
        if code is not None:
            roomRes = Room.objects.filter(code=code)
            if len(roomRes) > 0:
                room = roomRes[0]
                self.request.session['roomCode'] = code
                return Response({'message': 'Room joined'}, status=status.HTTP_200_OK)
            return Response({'Bad request': 'Invalid room code'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Bad request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            query_set = Room.objects.filter(host=host)
            if query_set.exists():
                room = query_set[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=[
                          'guest_can_pause', 'votes_to_skip'])
                self.request.session['roomCode'] = room.code
                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause,
                            votes_to_skip=votes_to_skip)
                room.save()
                self.request.session['roomCode'] = room.code
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)
        return Response({'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class GetUserInRoom(APIView):
    def get(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        data = {
            'code': self.request.session.get('roomCode')
        }
        return JsonResponse(data, status=status.HTTP_200_OK)


class LeaveRoom(APIView):
    def post(self, request, format=None):
        if 'roomCode' in self.request.session:
            self.request.session.pop('roomCode')
            host_id = self.request.session.session_key
            room_res = Room.objects.filter(host=host_id)
            if len(room_res) > 0:
                room = room_res[0]
                room.delete()

        return Response({'Message': 'Success'}, status=status.HTTP_200_OK)


class UpdateView(APIView):
    serializer_class = UpdateRoomSerializer

    def patch(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            code = serializer.data.get('code')
            query_set = Room.objects.filter(code=code)
            if not query_set.exists():
                return Response({'Msg': 'Room does not exist'}, status=status.HTTP_404_NOT_FOUND)
            room = query_set[0]
            user_id = self.request.session.session_key
            if room.host != user_id:
                return Response({'Msg': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
            room.guest_can_pause = guest_can_pause
            room.votes_to_skip = votes_to_skip
            room.save(update_fields=[
                'guest_can_pause', 'votes_to_skip'])
            return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
        return Response({'Bad request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)
