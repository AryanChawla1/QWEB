from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ScoresSerializer
from .models import Scores

# Create your views here.

class ScoresView(viewsets.ModelViewSet):
    serializer_class = ScoresSerializer
    queryset = Scores.objects.all()