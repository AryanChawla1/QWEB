# users/serializers.py
from rest_framework.serializers import ModelSerializer
from .models import CustomUser, Scores

class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'last_login', 'date_joined', 'is_staff', "streak")

class ScoresSerializer(ModelSerializer):
    class Meta:
        model = Scores
<<<<<<< HEAD
        fields = ("account", "time", "moves", "date")
=======
        fields = ("account_id", "time", "moves", "date")
>>>>>>> 72878b7de449342d5b4037be9ea07e645104eb0c
