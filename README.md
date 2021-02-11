# Aluminium Atom (3D Model) Installation and User Guide
------

This document gives the instructions to install and run locally a 3D model of an atom of Aluminium. 
**NOTE:** If you simply run the application by opening the index.html file in a browser, there may be 
some errors. If you want to see the model without any problem, then you can follow the installation 
guide provided in this repository. 

# Project Description
This project is a 3D representation of an atom of Aluminium. The model has the nucleus of the atom 
(composed by 13 protons and 14 neutrons), and its 3 energy layers with their 2, 8 and 3 electrons respectively. 

# Requirements
The 3D model should be composed by the following elements:

1. WebGL Scene. For the development of this project the team decided to use [ThreeJs](https://threejs.org/). 
ThreeJs is a library that runs over WebGL.
2. Two texures. For this model, some textures for the backgroud, protons, neutrons and electrons were used. 
The energylayers does not have any texture because the team considered that the material and color chosen 
look nice. 
3. A light. The scene has 2 light sources located in the top of it.
4. A shadow. All the elements in the scene have a shadowed area because there is not direct incidence of the 
light sources on them.
5. Animation. The valence electrons rotate over the last energy layer of the atom.
6. Interactive control. Camera can be moved with the help of the mouse. Also, you can zoom in or zoom out with 
the help of the scroll wheel of the mouse.

# References
Some research were required in order to achieve the goal of the project, so here is a list of all the used resources: 
1. https://www.youtube.com/channel/UCC7y8uQQXtSxXDGle76HAxw -->
2. https://stackoverflow.com/questions/13039589/rotate-the-camera-around-an-object-using-the-arrow-keys-in-three-js -->
3. https://stackoverflow.com/questions/29202091/three-js-keyboard-rotation -->
4. https://www.youtube.com/watch?v=6oFvqLfRnsU&ab_channel=DesignCourse -->
5. https://www.aaron-gray.com/three-js-tutorial-building-an-atom/

# Textures
The textures are in the **textures** folder that is in the root of this repository.

# Installation Guide
For this project to run correctly you need to mount it on an HTTP server. If you don't have it and you open the 
index.html file in a browser, a Cross-Origin error will raise. Nevertheless. if you want to run the project quickly 
and without any error, you can follow this guide:

1. Install the [Visual Studio Code](https://code.visualstudio.com/) editor.
2. Open the recently install program and go to the **extensions** section (usually this can be found in a bar in 
the left side of your screen).
3. Look for an extension called Live Server (by Ritwick Dey) and install it.
4. Open this project in Visual Studio Code, right click the index.html and select the "Open with Live Server" 
section (if this option does not appear, try restarting Visual Studio Code and try this step again).
5. Enjoy the 3D model.

# User Guide
You can perform the following actions once you opened the model:
1. Rotate the model keeping pressed the left click of the mouse and dragging it to the desired direction.
2. Zoom in or zoom out with the scroll wheel of the mouse.