# from functions import print_board
# size = 7
# startboard = []

def square(rows, board):
    counter = 1
    for x in range(rows):
        board.append([])
        for _ in range(rows):
            board[x].append(counter)
            counter += 1

def rectangle(rows, cols, board):
    counter = 1
    for y in range(0, cols):
        board.append([])
        for _ in range(0, rows):
            board[y].append(counter)
            counter += 1

def triangle(rows, board):
    counter = 1
    repeats = 1
    pos = rows - 1
    for x in range(rows):
        board.append(['' for _ in range(rows*2 - 1)])
        for y in range(repeats):
            board[x][pos + y] = counter
            counter += 1
        repeats += 2
        pos -= 1

def diamond(rows, board):
    counter = 1
    repeats = 1
    pos = rows // 2
    for x in range(rows):
        board.append(['' for _ in range(rows)])
        for y in range(repeats):
                board[x][pos + y] = counter
                counter += 1
        if x < rows // 2:   
            repeats += 2
            pos -= 1
        else:
            repeats -= 2
            pos += 1

# diamond(size, startboard)
# print_board(startboard)


