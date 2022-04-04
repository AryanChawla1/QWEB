from django.http import JsonResponse
from vs_bot.algorithm import Solve
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['POST'])
def solve(request):
   try:
      data = request.data["board"]
      attempt_solve = Solve(data)
      commands = attempt_solve.solve_board()
      return JsonResponse({'commands': commands}, status=status.HTTP_200_OK)
   except:
      return JsonResponse({'error': 'error'}, status=status.HTTP_400_BAD_REQUEST, safe=False)