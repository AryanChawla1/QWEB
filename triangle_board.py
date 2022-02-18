# start with 1 / 3 / 5 board

import random

rows = 4

solved = []

def initialized_solved(x):
    counter = 1
    for row in range(x):
        solved.append([])
        for val in range(row*2 + 1):
            solved[row].append(counter)
            counter += 1

initialized_solved(rows)

board = [row[:] for row in solved]

def print_board():
    spaces = len(board) - 1
    for row in board:
        for i in range(spaces):
            print("   ", end="")
        print(''.join(['{:3}'.format(item) for item in row]))
        spaces -= 1

# Moves the row, right = True, left = False
def move_row(row_index, direction):
    x = len(board[row_index])

    if not direction:
        temp = board[row_index][0]
        for index in range(x - 1):
            board[row_index][index] = board[row_index][index + 1]
        board[row_index][x - 1] = temp
    else:
        temp = board[row_index][x - 1]
        for index in range(x - 1, 0, -1):
            board[row_index][index] = board[row_index][index - 1]
        board[row_index][0] = temp

# Moves the column, down = True, up = False
def move_column(cdex, direction):
 
    valid_rows = rows - abs(rows - 1 - cdex)

    if not direction:
        start = rows - valid_rows
        temp = board[start][0] if cdex < rows else board[start][-1]
        for row in range(valid_rows - 1):
            column = row if cdex < rows else len(board[start + row]) - row - 1
            board[start + row][column] = board[start + row + 1][column + 1]
        board[rows - 1][cdex] = temp
    else:
        temp = board[rows - 1][cdex]
        column = cdex
        for row in range(rows - 1, rows - valid_rows, -1):
            board[row][column] = board[row-1][column - 1]
            column -= 1
        board[rows - valid_rows][column] = temp
        


# Scrambles board
def scramble_board():
    counter = random.randint(rows ** 2, rows**4)
    for x in range(counter):
        move_row(random.randint(0, rows-1), bool(random.getrandbits(1)))
        move_column(random.randint(0, 2*rows-2), bool(random.getrandbits(1)))


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

