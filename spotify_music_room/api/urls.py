from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, GetUserInRoom, LeaveRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('get-user', GetUserInRoom.as_view()),
    path('leave-room', LeaveRoom.as_view())
]
