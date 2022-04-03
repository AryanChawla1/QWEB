# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class CustomUser(AbstractUser):
    def __str__(self):
        return self.username
    streak = models.IntegerField(default=0)
    def __str__(self):
        return self.email
    

class Scores(models.Model):
    account = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    time = models.IntegerField() #change this to time not time
    moves = models.IntegerField()
<<<<<<< HEAD
    date = models.DateTimeField(default=timezone.now)
=======
    date = models.DateField()
>>>>>>> 72878b7de449342d5b4037be9ea07e645104eb0c
