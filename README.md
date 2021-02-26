# Music-Player

## ABSTRACT

* In our daily life, we see every person has a hobby and that may be listening to music. Even if listening to music may not be a hobby but one listens to it in one way or the other. So, in order to listen to music, they all need a Music player (hardware or software) where they can play their favourite songs. And we have to install a music player on our computer, based the Operating system i.e. Windows, Macintosh, Android, Linux, etc. Then we can listen to our favourite songs. 

* This creates a need of having a music player application. Therefore, I decided to make a music player application. Many modern-day music players offer streaming music from platforms like YouTube. So, I have also incorporated the functionality of playing music directly from YouTube. Conventionally, users can also play local mp3 files. *

## INTRODUCTION
As the title suggests, in this project I am developing a music player for windows. This project is written in Python language (as its backend) and in JavaScript with HTML and CSS (as its frontend). The communication between the two languages is handled by a python module called eel. The version of python used here is Python 3.8.
The music player functionalities like playing music, etc is handled by python module called pygame with the help of another module called mutagen for retrieving the metadata, such as song length etc, of the music file in play. For adding, managing and deleting the music files from the current playlist of the music player I have used tkinter module. I have also used other modules which are discussed in Modules Used section.
Finally, I have packed all the files into an exe file that can be used on any windows operating machine.







1.2 Software Used
1.	**Python 3.8:**
Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.

2.	**Sublime Text:**
Sublime Text is a shareware cross-platform source code editor with a Python application programming interface (API). It natively supports many programming languages and markup languages, and functions can be added by users with plugins, typically community-built and maintained under free-software licenses.

1.3 Modules Used
To use the modules mentioned below first one needs to install pip from here: https://pip.pypa.io/en/stable/installing/ 

1.	**Eel**: There are several options for making GUI apps in Python, but if you want to use HTML/JS then you generally have to write a lot of code to communicate from the Client (JavaScript) side to the Server (Python) side.
The closest Python equivalent to Electron (to my knowledge) is cefpython. It is a bit heavy weight for what I wanted.
Eel is not as fully-fledged as Electron or cefpython but it is very suitable for making the GUI equivalent of little utility scripts that you use internally in your team.
It is a light weight communicator between the two sides i.e. the python side and the JavaScript side, with easy to use implementations of the code. 
Installation:
To install open command prompt and type:
	pip install eel

2.	**Tkinter**: Tkinter is a Python binding to the Tk GUI toolkit. It is the standard Python interface to the Tk GUI toolkit. Tkinter is included with standard Linux, Microsoft Windows and Mac OS X installs of Python.
I have mainly used Tkinter file dialog boxes for locating the music files to play and Tkinter List boxes for storing the location of those files.





 
3.	**Pygame**: Pygame is a Free and Open Source cross-platform library for the development of multimedia applications like video games on Python. It uses the Simple DirectMedia Layer library and several other popular libraries to abstract most common functions and makes writing these programs a more intuitive task.
Here I have used ‘pygame mixer music’ for loading the music file into the stream and playing it, for pausing the music, etc. 
Installation:
To install open command prompt and type:
pip install pygame


4.	**Os**: The OS module in python provides functions for interacting with the operating system. OS, comes under Python’s standard utility modules. This module provides a portable way of using operating system dependent functionality. The *os* and *os.path* modules include many functions to interact with the file system.
I have used *os.path* module for making the desired changes to the path of the music files.



5.	**Mutagen**: Mutagen is a Python module to handle audio metadata. It supports ASF, FLAC, MP4, Monkey’s Audio, MP3, Musepack, Ogg Opus, Ogg FLAC, Ogg Speex, Ogg Theora, Ogg Vorbis, True Audio, WavPack, OptimFROG, and AIFF audio files. All versions of ID3v2 are supported, and all standard ID3v2.4 frames are parsed. It can read Xing headers to accurately calculate the bitrate and length of MP3s.
Installation:
To install open command prompt and type:
pip install mutagen


6.	**Time**: Python has defined a module, “time” which allows us to handle various operations regarding time, its conversions and representations, which find its use in various applications in life.
It comes pre-installed with the standard installation of Python.




## 3. SYSTEM DESIGN AND ANALYSIS

3.1 Overview of the system
The system consists of a backend end side and a front side. The backend side is written in Python and is saved in “main.py’ file. This file contains the driver code of the application and handles the execution of the application through the methods defined in it. The front end is written in JavaScript, HTML and CSS. All the front-end files are collectively saved in “UI” folder in the root directory of the project. 

* App Directory Information:

![image1](/images/1.JPG)


* App Driving Files and their functions:

![image2](/images/2.JPG)






 
3.2 Flow of control of App:


![image3](/images/3.JPG)





![image4](/images/4.JPG)

















3.3 Data Flow Diagram:

![image5](/images/5.JPG)
 



