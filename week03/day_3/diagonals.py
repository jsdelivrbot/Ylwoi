__author__ = 'ylwoi'

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw the canvas' diagonals in green.

diagonal1 = canvas.create_line(0, 0, 300, 300, fill='green')
daigonal2 = canvas.create_line(0, 300, 300, 0, fill='green')

root.mainloop()