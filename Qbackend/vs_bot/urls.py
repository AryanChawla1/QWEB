from django.urls import include, path
from vs_bot import views

urlpatterns = [
    path('', views.solve),
]