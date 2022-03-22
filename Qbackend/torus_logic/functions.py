import random

# Moves the row, right = True, left = False
# Log is used when we want to return the command performed
def move_row(rdex, direction, board, log=False):

   length = len(board[rdex])

   beg = next((i for i, x in enumerate(board[rdex]) if x), None)
   end = length - next((i for i, x in enumerate(board[rdex][::-1]) if x), None)

   if not direction:
      temp = board[rdex][beg]
      for index in range(beg, end - 1):
         board[rdex][index] = board[rdex][index + 1]
      board[rdex][end-1] = temp
   else:
      temp = board[rdex][end - 1]
      for index in range(end - 1, 0, -1):
         board[rdex][index] = board[rdex][index - 1]
      board[rdex][beg] = temp
   
   if log:
      if direction:
         return "r" + str(rdex)
      else:
         return "l" + str(rdex)

# Moves the column, down = True, up = False
def move_column(cdex, direction, board, log=False):

   column = [row[cdex] for row in board]
   length = len(column)

   beg = next((i for i, x in enumerate(column) if x), None)
   end = length - next((i for i, x in enumerate(column[::-1]) if x), None)

   if not direction:
      temp = board[beg][cdex]
      for index in range(beg, end - 1):
         board[index][cdex] = board[index + 1][cdex]
      board[end - 1][cdex] = temp
   else:
      temp = board[end - 1][cdex]
      for index in range(end - 1, beg, -1):
         board[index][cdex] = board[index - 1][cdex]
      board[beg][cdex] = temp
   
   if log:
      if direction:
         return "d" + str(cdex)
      else:
         return "u" + str(cdex)

def print_board(board):
   print('\n'.join([''.join(['{:3}'.format(item) for item in row]) 
      for row in board]))

   print()

def shuffle(board):
   rows = len(board)
   cols = len(board[0])

   for _ in range(75):
      move_row(random.randint(0, rows - 1), bool(random.getrandbits(1)), board)
      move_column(random.randint(0, cols - 1), bool(random.getrandbits(1)), board)
