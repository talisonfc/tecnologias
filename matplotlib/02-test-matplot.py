import matplotlib.pyplot as plt
import numpy as np 

# Create a empty figure
#fig = plt.figure()
#fig.suptitle('No axes on this figure')

# Create a figure with four subfigure
# fig -> reference to the figure
# ax_lst -> reference to the axes
fig, ax_lst = plt.subplots(2,2)
ax_lst[0][0].set_title('sub 1')
ax_lst[0][1].set_title('sub 2')
ax_lst[1][0].set_title('sub 3')
ax_lst[1][1].set_title('sub 4')

x = np.arange(0,10,0.2)
y = np.sin(x)
ax_lst[0][0].plot(x,y)

x = np.arange(0,100,0.2)
y = np.sin(x)
ax_lst[0][1].plot(x,y)

plt.show()