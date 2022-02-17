import random


# Slicing array

solved = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
]

board = [row[:] for row in solved]

# Scrambles board
def scramble_board():
   counter = random.randint(len(board) ** 2, len(board)**4)
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
   


scramble_board()
print_board()

while board != solved:
   command = input("Command: ")
   if command[1] == "u":

      move_column(int(command[0])-1, False)
   elif command[1] == "d":

      move_column(int(command[0])-1, True)
   elif command[1] == "l":

      move_row(int(command[0])-1, False)
   elif command[1] == "r":

      move_row(int(command[0])-1, True)
   elif command == "end":
      exit()

   print_board()

print("Solved!")
