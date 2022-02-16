"""
   Notes
      Assuming Square Matrix
      3 by 3 Matrix Only
"""
# Randomized board
board = [
   [3,6,1],
   [4,9,2],
   [5,8,7]
]

# Solved board
solved = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
]

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
def fix(number, curr_co, des_co):

   if curr_co == des_co:
      return
   
   if (curr_co[0] == des_co[0]):
      move_column(curr_co[1], True)
      move_row(curr_co[0] + 1, False)
      move_column(curr_co[1], False)
      curr_co = find(number)
   if (curr_co[1] == des_co[1]):
      move_row(curr_co[0], False)
   
   move_column(des_co[1], True)
   # Can be optimized
   while (find(number)[1] != des_co[1]):
      move_row(find(number)[0], True)
   while (find(number)[0] != des_co[0]):
      move_column(find(number)[1], False)
   if (des_co != find(number)):
      print("Error!")


def solve_board():
   board_length = len(board) * (len(board) - 1)
   for i in range(1, board_length + 1):
      coor = find(i)
      des_coor = ((i-1)//3,(i-1)%3)
      fix(i, coor, des_coor)
   # while board != solved:
   #    move_row(len(board) - 1, True)


solve_board()