"""
   Notes
      Assuming Square Matrix
"""
# Randomized board
board = [
   [5,6,2],
   [7,3,9],
   [4,1,8]
]

# Solved board
solved = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
]



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


# Finds number in board, returns (row, col)
def find(desired_number):
   for row in range(len(board)):
      for col in range(len(board)):
         if board[row][col] == desired_number:
            return (row, col)
