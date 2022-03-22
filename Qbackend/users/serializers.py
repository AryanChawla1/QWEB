# users/serializers.py
from rest_framework.serializers import ModelSerializer
from .models import CustomUser
class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'last_login', 'date_joined', 'is_staff', "streak")