from shape_generators import *
from functions import *

shape = random.randint(0, 3)

board = []

if shape == 0:
    square(random.randint(3, 5), board)
elif shape == 1:
    rectangle(random.randint(3, 5), random.randint(3, 5), board)
elif shape == 2:
    triangle(random.randint(3, 4), board)
elif shape == 3: 
    diamond(random.randrange(5, 8, 2), board)

solved = [row[:] for row in board]
shuffle(board)

print_board(board)

while board != solved:
    command = input("Command: ")
    if command[1] == "u":
        move_column(int(command[0])-1, False, board)
    elif command[1] == "d":
        move_column(int(command[0])-1, True, board)
    elif command[1] == "l":
        move_row(int(command[0])-1, False, board)
    elif command[1] == "r":
        move_row(int(command[0])-1, True, board)
    elif command == "end":
        exit()

    print()
    print_board(board)

print("Solved!")