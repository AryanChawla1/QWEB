"""
   Notes
      Assuming Square Matrix
      Can solve any square matrix
"""

from functions import *


# Solved board
solved = [
   [1,2,3,4,5],
   [6,7,8,9,10],
   [11,12,13,14,15],
   [16,17,18,19,20],
   [21,22,23,24,25]
]

# Slicing array
board = [row[:] for row in solved]


# Finds number in board, returns (row, col)
def find(desired_number):

   for row in range(len(board)):
      for col in range(len(board)):
         if board[row][col] == desired_number:
            return (row, col)


# Puts the number in right position
# cor[0] is row, cor[1] is column
def fix(number, curr_co, des_co):

   if curr_co == des_co:
      return
   
   # If number is in the right row, but wrong position
   # It it easier to just take it out of the row and solve.
   if (curr_co[0] == des_co[0]):
      move_column(curr_co[1], True, board)
      move_row(curr_co[0] + 1, False, board)
      move_column(curr_co[1], False, board)
      curr_co = find(number)

   # If number is in the right column, but wrong position
   # It it easier to just take it out of the row and solve.
   if (curr_co[1] == des_co[1]):
      move_row(curr_co[0], False, board)
   
   for i in range(abs(des_co[0] - curr_co[0])):
      move_column(des_co[1], True, board)
   # Can be optimized
   while (find(number)[1] != des_co[1]):
      move_row(find(number)[0], True, board)
   while (find(number)[0] != des_co[0]):
      move_column(find(number)[1], False, board)
   if (des_co != find(number)):
      print("Error!")


# Solves the board
def solve_board():
   board_length = len(board) * (len(board) - 1)
   for i in range(1, board_length + 1):
      coor = find(i)
      des_coor = ((i-1)//len(board),(i-1)%len(board))
      fix(i, coor, des_coor)
   
   # For last row
   solve_last_row(board_length + 1)


# Solves last row, screws up last column
def solve_last_row(number):

   if len(board) == 3:
      while board != solved:
         move_row(len(board) - 1, True, board)
      return
   
   # Get first in position
   while find(number)[1] != 0:
      move_row(len(board) - 1, False, board)
   
   # Now fix others if needed
   for i in range(number + 1, number + len(board)):

      if (find(i)[1] != ((i-1)%len(board))) or (find(i)[0] != (len(board) - 1)):
         # Perform algorithm to solve

         # Check if number is in wrong row
         if find(i)[0] != (len(board) - 1):
            for j in range(len(board) - (i%len(board))):
               move_row(len(board) - 1, True, board)
            while find(i)[0] != (len(board) - 1):
               move_column(len(board) - 1, True, board)
         # Wrong column
         elif find(i)[1] != ((i-1)%(len(board))):
            while find(i)[1] != (len(board) - 1):
               move_row(len(board) -1, True, board)
            move_column(len(board) - 1, False, board)
            while find(number)[1] != 0:
               move_row(len(board) - 1, False, board)
            for j in range(len(board) - (i%len(board))):
               move_row(len(board) -1, True, board)
            move_column(len(board) - 1, True, board)
            
         while find(number)[1] != 0:
            move_row(len(board) - 1, False, board)
   
   fix_last_column(len(board))


# Fixes last column
def fix_last_column(number):

   # Get first in position
   while find(number)[0] != 0:
      move_column(len(board)-1, False, board)
   
   # Fix others
   for i in range(number, len(board)*len(board) + number, len(board)):

      if find(i)[0] != (i-1)//len(board):
         while find(i)[0] != (len(board) - 1):
            move_column(len(board) -1, True, board)
         move_row(len(board) -1, False, board)
         while find(number)[0] != 0:
            move_column(len(board) -1, False, board)
         for j in range(len(board) - (i//len(board))):
            move_column(len(board) -1, True, board)
         move_row(len(board) -1, True, board)
      while find(number)[0] != 0:
         move_column(len(board) -1, False, board)


shuffle(board)
print_board(board)
solve_board()
print_board(board)