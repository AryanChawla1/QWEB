from vs_bot.functions import *


class Solve:

   def __init__(self, board):
      self.board = board
      self.solved = []
      self.log_commands = []
      self.log = True

      length = len(self.board)
      counter = 1
      for i in range(length):
         new = []
         for j in range(length):
            new.append(counter)
            counter += 1
         self.solved.append(new)
   
   def find(self, desired_number):
      for row in range(len(self.board)):
         for col in range(len(self.board)):
            if self.board[row][col] == desired_number:
               return (row, col)
   
   def fix(self, number, curr_co, des_co):

      if curr_co == des_co:
         return
      
      # If number is in the right row, but wrong position
      # It it easier to just take it out of the row and solve.
      if (curr_co[0] == des_co[0]):
         self.log_commands.append(move_column(curr_co[1], True, self.board, self.log))
         self.log_commands.append(move_row(curr_co[0] + 1, False, self.board, self.log))
         self.log_commands.append(move_column(curr_co[1], False, self.board, self.log))
         curr_co = self.find(number)

      # If number is in the right column, but wrong position
      # It it easier to just take it out of the row and solve.
      if (curr_co[1] == des_co[1]):
         self.log_commands.append(move_row(curr_co[0], False, self.board, self.log))
      
      for i in range(abs(des_co[0] - curr_co[0])):
         self.log_commands.append(move_column(des_co[1], True, self.board, self.log))
      # Can be optimized
      while (self.find(number)[1] != des_co[1]):
         self.log_commands.append(move_row(self.find(number)[0], True, self.board, self.log))
      while (self.find(number)[0] != des_co[0]):
         self.log_commands.append(move_column(self.find(number)[1], False, self.board, self.log))
      if (des_co != self.find(number)):
         print("Error!")

   # Solves the board
   def solve_board(self):
      board_length = len(self.board) * (len(self.board) - 1)
      for i in range(1, board_length + 1):
         coor = self.find(i)
         des_coor = ((i-1)//len(self.board),(i-1)%len(self.board))
         self.fix(i, coor, des_coor)
      
      # For last row
      self.solve_last_row(board_length + 1)
      return self.log_commands
   
   # Solves last row, screws up last column
   def solve_last_row(self, number):

      if len(self.board) == 3:
         while self.board != self.solved:
            self.log_commands.append(move_row(len(self.board) - 1, True, self.board, self.log))
         return
      
      # Get first in position
      while self.find(number)[1] != 0:
         self.log_commands.append(move_row(len(self.board) - 1, False, self.board, self.log))
      
      # Now fix others if needed
      for i in range(number + 1, number + len(self.board)):

         if (self.find(i)[1] != ((i-1)%len(self.board))) or (self.find(i)[0] != (len(self.board) - 1)):
            # Perform algorithm to solve

            # Check if number is in wrong row
            if self.find(i)[0] != (len(self.board) - 1):
               for j in range(len(self.board) - (i%len(self.board))):
                  self.log_commands.append(move_row(len(self.board) - 1, True, self.board, self.log))
               while self.find(i)[0] != (len(self.board) - 1):
                  self.log_commands.append(move_column(len(self.board) - 1, True, self.board, self.log))
            # Wrong column
            elif self.find(i)[1] != ((i-1)%(len(self.board))):
               while self.find(i)[1] != (len(self.board) - 1):
                  self.log_commands.append(move_row(len(self.board) -1, True, self.board, self.log))
               self.log_commands.append(move_column(len(self.board) - 1, False, self.board, self.log))
               while self.find(number)[1] != 0:
                  self.log_commands.append(move_row(len(self.board) - 1, False, self.board, self.log))
               for j in range(len(self.board) - (i%len(self.board))):
                  self.log_commands.append(move_row(len(self.board) -1, True, self.board, self.log))
               self.log_commands.append(move_column(len(self.board) - 1, True, self.board, self.log))
               
            while self.find(number)[1] != 0:
               self.log_commands.append(move_row(len(self.board) - 1, False, self.board, self.log))
      
      self.fix_last_column(len(self.board))
   
   def fix_last_column(self, number):

      # Get first in position
      while self.find(number)[0] != 0:
         self.log_commands.append(move_column(len(self.board)-1, False, self.board, self.log))
      
      # Fix others
      for i in range(number, len(self.board)*len(self.board) + number, len(self.board)):

         if self.find(i)[0] != (i-1)//len(self.board):
            while self.find(i)[0] != (len(self.board) - 1):
               self.log_commands.append(move_column(len(self.board) -1, True, self.board, self.log))
            self.log_commands.append(move_row(len(self.board) -1, False, self.board, self.log))
            while self.find(number)[0] != 0:
               self.log_commands.append(move_column(len(self.board) -1, False, self.board, self.log))
            for j in range(len(self.board) - (i//len(self.board))):
               self.log_commands.append(move_column(len(self.board) -1, True, self.board, self.log))
            self.log_commands.append(move_row(len(self.board) -1, True, self.board, self.log))
         while self.find(number)[0] != 0:
            self.log_commands.append(move_column(len(self.board) -1, False,self.board, self.log))
