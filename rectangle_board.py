import random

boardx = random.randint(3, 7)
boardy = random.randint(3, 7)


solved = []

counter = 0

for y in range(0, boardy):
   solved.append([])
   for x in range(0, boardx):
      solved[y].append(counter)
      counter += 1

# Slicing array

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
         try:
            move_row(value, t_f == 1)
         except IndexError:
            move_column(value, t_f == 1)    
      else:
         try:
            move_column(value, t_f == 1)
         except IndexError:
            move_row(value, t_f == 1)   

def print_board():
   print('\n'.join([''.join(['{:3}'.format(item) for item in row]) 
      for row in board]))

   print()

# Moves the row, right = True, left = False
def move_row(row_index, direction):

   if not direction:
      temp = board[row_index][0]
      for index in range(boardx - 1):
         board[row_index][index] = board[row_index][index + 1]
      board[row_index][boardx - 1] = temp
   else:
      temp = board[row_index][boardx - 1]
      for index in range(boardx - 1, 0, -1):
         board[row_index][index] = board[row_index][index - 1]
      board[row_index][0] = temp

# Moves the column, down = True, up = False
def move_column(column_index, direction):

   if not direction:
      temp = board[0][column_index]
      for index in range(boardy - 1):
         board[index][column_index] = board[index + 1][column_index]
      board[boardy - 1][column_index] = temp
   else:
      temp = board[boardy - 1][column_index]
      for index in range(boardy - 1, 0, -1):
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
