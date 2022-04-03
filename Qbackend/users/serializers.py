# users/serializers.py
from rest_framework.serializers import ModelSerializer
from .models import CustomUser, Scores

class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'last_login', 'date_joined', 'is_staff', "streak")

class ScoresSerializer(ModelSerializer):
    class Meta:
        model = Scores
        fields = ("account_id", "time", "moves", "date")
