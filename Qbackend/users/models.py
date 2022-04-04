# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
class CustomUser(AbstractUser):
    streak = models.IntegerField(default=0)
    def __str__(self):
        return self.email
    

class Scores(models.Model):
    account_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    time = models.TimeField() #change this to time not time
    moves = models.IntegerField()
    date = models.DateField()