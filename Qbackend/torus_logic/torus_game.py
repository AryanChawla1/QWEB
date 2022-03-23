from shape_generators import *
from functions import *

shape = random.randint(0, 3)

board = []

match shape:
    case 0: square(random.randint(3, 5), board)
    case 1: rectangle(random.randint(3, 5), random.randint(3, 5), board)
    case 2: triangle(random.randint(3, 4), board)
    case 3: diamond(random.randrange(5, 8, 2), board)

solved = [row[:] for row in board]
shuffle(board)

print_board(board)

while board != solved:
    command = input("Command: ")
    match command[1]:
        case "u": move_column(int(command[0])-1, False, board)
        case "d": move_column(int(command[0])-1, True, board)
        case "l": move_row(int(command[0])-1, False, board)
        case "r": move_row(int(command[0])-1, True, board)
    if command == "end": exit()

    print()
    print_board(board)

print("Solved!")