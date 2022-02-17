"""
   Notes
      Assuming Square Matrix
      LAST ROW METHOD HALF DONE!


"""

import random


# Solved board
solved = [
   [1,2,3,4],
   [5,6,7,8],
   [9,10,11,12],
   [13,14,15,16]
]

# Slicing array
board = [row[:] for row in solved]


# Scrambles board
def scramble_board():
   counter = random.randint(0, len(board) ** 2)
   for i in range(counter):
      # row or column
      r_c = random.randint(0,1)
      # true or false
      t_f = random.randint(0,1)
      # index
      value = random.randint(0, len(board)-1)
      if r_c == 1:
         move_row(value, t_f == 1)
      else:
         move_column(value, t_f == 1)


# Prints board
def print_board():
   for i in range(len(board)):
      print(board[i])
   print("")

# Moves the row, right = True, left = False
def move_row(row_index, direction):

   if not direction:
      temp = board[row_index][0]
      for index in range(len(board) - 1):
         board[row_index][index] = board[row_index][index + 1]
      board[row_index][len(board) - 1] = temp
   else:
      temp = board[row_index][len(board) - 1]
      for index in range(len(board) - 1, 0, -1):
         board[row_index][index] = board[row_index][index - 1]
      board[row_index][0] = temp
   
   print_board()



# Moves the column, down = True, up = False
def move_column(column_index, direction):

   if not direction:
      temp = board[0][column_index]
      for index in range(len(board) - 1):
         board[index][column_index] = board[index + 1][column_index]
      board[len(board) - 1][column_index] = temp
   else:
      temp = board[len(board) - 1][column_index]
      for index in range(len(board) - 1, 0, -1):
         board[index][column_index] = board[index - 1][column_index]
      board[0][column_index] = temp
   
   print_board()


# Finds number in board, returns (row, col)
def find(desired_number):

   for row in range(len(board)):
      for col in range(len(board)):
         if board[row][col] == desired_number:
            return (row, col)

# Puts the number in right position
# cor[0] is row, cor[1] is column
def fix(number, curr_co, des_co):

   print("Solving", number)

   if curr_co == des_co:
      return
   
   # If number is in the right row, but wrong position
   # It it easier to just take it out of the row and solve.
   if (curr_co[0] == des_co[0]):
      move_column(curr_co[1], True)
      move_row(curr_co[0] + 1, False)
      move_column(curr_co[1], False)
      curr_co = find(number)

   # If number is in the right column, but wrong position
   # It it easier to just take it out of the row and solve.
   if (curr_co[1] == des_co[1]):
      move_row(curr_co[0], False)
   
   for i in range(abs(des_co[0] - curr_co[0])):
      move_column(des_co[1], True)
   # Can be optimized
   while (find(number)[1] != des_co[1]):
      move_row(find(number)[0], True)
   while (find(number)[0] != des_co[0]):
      move_column(find(number)[1], False)
   if (des_co != find(number)):
      print("Error!")

# Solves the board
def solve_board():
   board_length = len(board) * (len(board) - 1)
   for i in range(1, board_length + 1):
      coor = find(i)
      des_coor = ((i-1)//len(board),(i-1)%len(board))
      fix(i, coor, des_coor)
   
   print("Time for Last row")
   # For last row
   solve_last_row(board_length + 1)


def solve_last_row(number):

   if len(board) == 3:
      while board != solved:
         move_row(len(board) - 1, True)
      return
   
   # Get first in position
   while find(number)[1] != 0:
      move_row(len(board) - 1, False)
   
   # Now fix others if needed
   for i in range(number + 1, number + len(board)):
      print("Solving", i)
      if (find(i)[1] != ((i-1)%len(board))) or (find(i)[0] != (len(board) - 1)):
         # Perform algorithm to solve

         # Check if number is in wrong row
         if find(i)[0] != (len(board) - 1):
            for j in range(len(board) - (i%len(board))):
               move_row(len(board) - 1, True)
            while find(i)[0] != (len(board) - 1):
               move_column(len(board) - 1, True)
         elif find(i)[1] != ((i-1)%(len(board))):
            while find(i)[1] != (len(board) - 1):
               move_row(len(board) -1, True)
            move_column(len(board) - 1, False)
            for j in range(len(board) - (i%len(board))):
               move_row(len(board) -1, True)
            move_column(len(board) - 1, True)
            
         while find(number)[1] != 0:
            move_row(len(board) - 1, False)


scramble_board()
solve_board()