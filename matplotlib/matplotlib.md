# Introduction

Matplot lib is a library for create graph with python language. It's a powerfull tools for data analytcs.

Everything in matplot is organized in hierachy. At the to of the hierarchy is the matplot (state-machine enviroment) which is provider by the matplob.pyplot module. At this level simple function are used to add plots elements (line, image, text, etc...) to the current axes in the current figure.

The next level down in hierarchy is the first level of the objected-oriented-interface, in which pyplot is used only for a few functions such as figure creation, and the use explicity creates and keeps track  os the figure and axes objects. At this level, the user uses pyplot to create figures, and through those figures, one or more axes objects can be created. The axes objects are the used for most plotting actions.

For even control, which is essenctial for things like embeddeing plots int GUI applications, the pyplot leve may be droped completely, leaving a purely object-oriented approach.

# Matplotlib, pyplot and pylad: how are they related?

Matplotlib is a whole package, matplotlib.pyplot is a module in matplotlib, and pylab is a module that gets installerd alongsid matplotlib.

Pylab contain reference for pyplot and numpy, but is not used anymore. It's recommended to use only pyplot for no interactive plotting.

# Backend

Matplotlib targets many differentes use cases and output formats. Some people use matplotlib interactively from the python shell and have plotting windows pop up when they type comands. Some people run Jypter notebooks and draw inline plots for quick data analysis. Others embed matplotlib into graphical use interface like wxpython or pygtk to build rich applications. Some people use matplotlib in batch scripts to generate postcript images from numerical simulations, and stil other run webapplication servers do dynamically serve up graphs.

To support all these use cases, matplotlib can targe differents outputs, and each of this capabilities is called a backend; the frontend is the use facing code, i. e., the plotting code, whereas the backend does all the hard work behind-the-scenes to make the figure. There are two types of backends: user interface backends (for use in pygtk, tkinter, qt4, or macosx, also referred to as interactive backends) and hardcopy backends to make image files (PNG, SVG, PDF, PS, also referred to as "non-interactive backends")
