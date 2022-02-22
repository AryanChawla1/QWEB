# start with 1 / 3 / 5 / 3 / 1 board

import random

rows = 5

solved = []

def initialized_solved(x):
    counter = 1
    for row in range(x//2 + 1):
        solved.append([])
        for val in range(row*2 + 1):
            solved[row].append(counter)
            counter += 1
    for row in range(x//2 + 1, x):
        solved.append([])
        for val in range(len(solved[row-1])-2):
            solved[row].append(counter)
            counter += 1


initialized_solved(rows)

board = [row[:] for row in solved]

def print_board():
    for row in range(rows):
        spaces = abs((rows//2) - row)
        for i in range(spaces):
            print("   ", end="")
        print(''.join(['{:3}'.format(item) for item in board[row]]))

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
    return

print_board()

# move_row(3, True)

# print_board()