from django.shortcuts import render

# Create your views here.


def index(request, *args, **kwargs):
    # render checks into the templates folder
    return render(request, 'frontend/index.html')
