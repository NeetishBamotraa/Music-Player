import eel
from tkinter import *
from tkinter import filedialog
import pygame
import os
import mutagen.mp3 as MP3
import time


eel.init('UI')

pygame.mixer.init()

root = Tk()
root.withdraw()
root.wm_attributes("-topmost",1)
@eel.expose
def add_songs():

	songs = filedialog.askopenfilenames(title="Choose A Song", filetypes=[("mp3 Files", "*.mp3" )])
	
	for song in songs:
		
		playlist_box_extra.insert(END, song)
		songpath, songname = os.path.split(song)
		playlist_box.insert(END, songname)

@eel.expose
def delete_song(x):
	
	index = search_index(x)
	active_song = playlist_box.get(ACTIVE)
	if states["active_song"] == index:
		pygame.mixer.music.stop()
		states["active_song"] = 0
		states["first"]=True
		states["same"]=True

	playlist_box.delete(index)
	playlist_box_extra.delete(index)


@eel.expose
def search_index(x):
	
	current_list = playlist_box.get(0,END)
	
	for i in range(len(current_list)):
		
		if playlist_box.get(i) == x:
			
			return i;

@eel.expose
def search_songname(x):
	return playlist_box.get(x)

@eel.expose
def play(x):

	playlist_box_extra.activate(x)
	playlist_box.activate(x)
	song = playlist_box_extra.get(x)
	
	pygame.mixer.music.load(song)

	pygame.mixer.music.play(loops=0, start = states["currenttime"])

	setvolplay()


@eel.expose
def totalsongno():
	return playlist_box.size()

@eel.expose
def stopmusic():
	pygame.mixer.music.stop()

@eel.expose
def pause(opts):

	if opts==1:
		pygame.mixer.music.pause()

		totaltime()

	if opts==2:
		pygame.mixer.music.unpause()





@eel.expose
def getsonglist():

	current_list = playlist_box.get(0,END)

	return current_list




#playtime-----------------------------------------------------------------------------------------

@eel.expose
def converted_current_time():

	currenttime = states["currenttime"]
	converted_currenttime = time.strftime('%M:%S', time.gmtime(currenttime))

	return converted_currenttime


@eel.expose
def songlength():
	song = playlist_box_extra.get(ACTIVE)
	
	songinfo = MP3.MP3(song)

	lengthsong = songinfo.info.length 

	return lengthsong

@eel.expose
def totaltime():

	song_length = songlength()

	total_time = time.strftime('%M:%S', time.gmtime(song_length))
	

	return total_time



#states of player----------------------------------------------------------------------------------------------

states = {
	"first": True,
	"pausedstate":True,
	"active_song": 0,
	"running_state": False,
	"songs_present": False,
	"same":False,
	"currenttime":0,
	"songlength":100,
	"volume":50,
	"repeattext":" ",
	"repeatall": False,
	"repeatone": False,
	"repeatanimation": False,
}

#export states------------------------------------------------------------------------------------------------
@eel.expose
def pgstates(x,y,z):

	if not(x==0 and y==0):		
		states[x] = y
	
	if not(z==0):
		return states[z]


@eel.expose
def setvolplay():
	pygame.mixer.music.set_volume(states["volume"]);


@eel.expose
def current_title():
	x = playlist_box.get(ACTIVE)
	
	return x



playlist_box = Listbox(root)
playlist_box_extra = Listbox(root)


eel.start('index1.html', size=(900,336))
