
function createlist(x)
{
	var arr = x;
	var t = document.getElementById("list");

	for(var i=0; i<arr.length; i++)
	{
		var li = document.createElement("li");
		var div = document.createElement("div");
		var input = document.createElement("input");
		input.setAttribute("type", "checkbox");
		input.setAttribute("class", "inputbox");

		li.setAttribute("ondblclick", "playthissong(this)");

		div.innerHTML = arr[i];

		li.appendChild(div);
		li.appendChild(input);

		t.appendChild(li);

	}

	arr = [];

}


function deletebutton()
{
	var li = document.getElementsByTagName("li");
	var count= li.length;

	console.log(count);
	while(count>0)
	{
		for(item of li)
		{	
			if (item.childNodes[1].checked == true)
			{
				eel.delete_song(item.childNodes[0].innerText);
				item.remove();
				count--;
			}
			else
			{count--;}

		}
	}

	playbutton();
}

function select_all()
{
	var input = document.getElementsByTagName("input");

	for(item of input)
	{
		item.checked = "checked";
	}
}


async function playbutton(active_song_index)
{
	var t = document.getElementById('playbutton');
	var div = t.getElementsByTagName('div');	
    var ut = document.getElementsByClassName('ring');

    if( typeof(active_song_index) != undefined && active_song_index != null){
    	eel.pgstates("active_song", active_song_index, 0);
 	}
 

    if(!( await (eel.pgstates(0,0,"songs_present")()).then( (value) => {return value;})))
    {
    	alert("Please Enter Songs")
    	return;
    }

    if(await (eel.pgstates(0,0,"same")()).then( (value) => {return value}) )
    {
    	for(item of ut)
			{
				item.style.animationName = "upiup";
				item.style.animationPlayState = "running";
				
			}
		
		if(!( await (eel.pgstates(0,0,"pausedstate")()).then( (value) => {return value;})))
		{
			for(item of div)
	    	{
	    	item.style.margin = "";
	    	item.style.transform = "";
	    	item.style.transition = "";
	    	}

	    	t.style.transform = "";
	    	t.style.transition = "";
		}

		eel.pgstates("same", false, 0);

		return

    }

    if(!( await (eel.pgstates(0,0,"first")()).then( (value) => {return value;})))
    {
	    if(( await (eel.pgstates(0,0,"pausedstate")()).then( (value) => {return value;})))
	    {
	    	/* this make the music to pause*/
	    	for(item of div)
	    	{
	    	item.style.margin = "2px 0";
	    	item.style.transform = "translateY(-3px)";
	    	item.style.transition = "0.5s";
	    	}

	    	t.style.transform = "rotateZ(-90deg) translateY(-50%)";
	    	t.style.transition = "0.5s";

	    	for(item of ut)
			{
				item.style.animationPlayState = "paused";
				item.style.animationName = "round";
			}

	    	
	    	eel.pgstates("pausedstate", false, 0);
	    	eel.pause(1);
	    	slidermover(2);
	    }
	    else
	    {
	    	for(item of div)
	    	{
	    	item.style.margin = "";
	    	item.style.transform = "";
	    	item.style.transition = "";
	    	}

	    	t.style.transform = "";
	    	t.style.transition = "";
	    	
	    	for(item of ut)
			{
				item.style.animationPlayState = "running";
				item.style.animationName = "round";
			}

	    	
	    	eel.pgstates("pausedstate", true, 0);
	    	eel.pause(2);
	    	slidermover(2);
	    	slidermover(1);
	    }
	}

	if(( await (eel.pgstates(0,0,"first")()).then( (value) => {return value;})))
	{
		for(item of ut)
		{
			item.style.animationName = "round";
		}
		for(item of div)
	    	{
	    	item.style.margin = "";
	    	item.style.transform = "";
	    	item.style.transition = "";
	    	}

	    	t.style.transform = "";
	    	t.style.transition = "";
	    	
	    	for(item of ut)
			{
				item.style.animationPlayState = "running";
			}

	   
		eel.pgstates("pausedstate", true, 0);
    	eel.pgstates("running_state", true,0);
    	eel.pgstates("first", false,0);
		
		eel.play(( await (eel.pgstates(0,0,"active_song")()).then( (value) => {return value;})));
		slidermover(2);
    	slidermover(1);
	}

	eel.current_title()(currenttitle);

}

function playthissong(x)
{
	eel.pgstates("currenttime", 0,0);
	document.getElementById('progressbar').value = 0;
	var song = x.childNodes[0].innerText;
	eel.pgstates("first", true,0);
	eel.search_index(song)(playbutton);
}



function repeat()
{
	var t = document.getElementById('repeat');
	var div = t.getElementsByTagName('div');
	var text = document.getElementById("repeattext").innerHTML;
    console.log(text);

	if( text == "A")
	{
		for(item of div)
    	{
    		item.style.animation = "none";
    	}

    	eel.pgstates("repeatall", false,0);
    	eel.pgstates("repeatone", false,0);
    	eel.pgstates("repeattext", " ",0);
    	eel.pgstates("repeatanimation", false,0);
    	document.getElementById("repeattext").innerHTML = " ";

	}

	else if (text == "1")
	{
		eel.pgstates("repeatall", true,0);
    	eel.pgstates("repeatone", false,0);
    	eel.pgstates("repeattext", "A",0);
    	eel.pgstates("repeatanimation", true,0);
    	document.getElementById("repeattext").innerHTML = "A";
	}

	else
	{
		for(item of div)
    	{
    		item.style.animation = "repeatanime 1s ease-in-out infinite";
    	}

    	eel.pgstates("repeatall", false,0);
    	eel.pgstates("repeatone", true,0);
    	eel.pgstates("repeattext", "1",0);
    	eel.pgstates("repeatanimation", true,0);
    	document.getElementById("repeattext").innerHTML = "1";
	}

   
}

function volume()
{ 

	if(document.getElementById("volslider").style.display == "none")
	{
		document.getElementById("volslider").style.display = "block";
	}
	else
	{
		document.getElementById("volslider").style.display = "none";
	}
} 

async function nextsong()
{
	eel.pgstates("currenttime", 0,0);
   document.getElementById('progressbar').value = 0;
   
   x = ( await (eel.pgstates(0,0,"active_song")()).then( (value) => {return value;})) + 1;

   if ( await (eel.pgstates(0,0,"repeatone")()).then( (value) => {return value;}) )
   {
   		x = x-1;
   }
   else if ( await (eel.pgstates(0,0,"repeatall")()).then( (value) => {return value;}) )
   {
   		totalsongno = await eel.totalsongno()();
   		if( x == totalsongno)
   		{
   			x=0;
   		}
   }
   else
   {
   		totalsongno = await eel.totalsongno()();
   		if( x == totalsongno)
   		{
   			eel.stopmusic();
   			slidermover(2);
   			document.getElementById("totaltime").innerText = "00:00";
   			document.getElementById("curtime").innerText = "00:00";
   			reachedEnd = true;
   			return;
   		}
   }

   eel.pgstates("first", true,0);
   playbutton(x);
}


var reachedEnd = false;
async function prevsong()
{
	
	if(reachedEnd == true)
   {
   	return;
   }

	eel.pgstates("currenttime", 0,0);
   document.getElementById('progressbar').value = 0;
   x = ( await (eel.pgstates(0,0,"active_song")()).then( (value) => {return value;})) - 1;

   eel.pgstates("first", true,0);
   playbutton(x);
}

function getsongs()
{
	eel.getsonglist()(createlist)
}

async function resumestate()
{
	if( (await (eel.pgstates(0,0,"running_state")()).then( (value) => {return value;})))
	{
		if((await (eel.pgstates(0,0,"pausedstate")()).then( (value) => {return value;})))
		{
			eel.pgstates("pausedstate", false, 0);
		}
		else
		{
			eel.pgstates("pausedstate", true, 0);
		}

		var values = await (eel.pgstates(0,0,"currenttime")()).then( (value) => {return value;})
		document.getElementById('progressbar').max = await (eel.pgstates(0,0,"songlength")()).then( (value) => {return value;})
		document.getElementById('progressbar').value = values;
		playbutton()
	}

	document.getElementById("repeattext").innerHTML = await (eel.pgstates(0,0,"repeattext")()).then( (value) => {return value;});

	if (await (eel.pgstates(0,0,"repeatanimation")()).then( (value) => {return value;})) 
	{
		var t = document.getElementById('repeat');
		var div = t.getElementsByTagName('div');

		for(item of div)
    	{
    		item.style.animation = "repeatanime 1s ease-in-out infinite";
    	}
	}

}

function currenttitle(x)
{
	document.getElementById('songbartext').innerHTML = x;
}



var intervalVar;
function slidermover(intervalopts)
{
	if (intervalopts==1) {intervalVar = setInterval( () =>{sliderposition();}, 1000)}

	if (intervalopts==2) { if(intervalVar != undefined ) {clearInterval(intervalVar);} }
}



async function sliderposition()
{
	if(await (eel.pgstates(0,0,"pausedstate")()).then( (value)=> {return value;} ) )
	{
		var totallength = parseInt(await eel.songlength()());
		document.getElementById("totaltime").innerText = await (eel.totaltime()()).then( (value) => {return value;});
		eel.pgstates("songlength", totallength, 0)
		document.getElementById('progressbar').max = totallength;

		var currenttime = await (eel.pgstates(0,0,"currenttime")()).then( (value)=> {return value;} );
		document.getElementById("curtime").innerText = await (eel.converted_current_time()()).then( (value) => {return value});
		
		

		if(currenttime >= totallength)
		{
			nextsong();
		}
		else
		{
			document.getElementById('progressbar').value = currenttime;
			currenttime = currenttime + 1;
			eel.pgstates("currenttime", currenttime, 0);
			
		}

	}
}


window.addEventListener("load", resumestate)
window.addEventListener("load", getsongs)



window.addEventListener("load", function(){

	document.getElementById('barcontainer').addEventListener("mouseup", function(){ 

		pos = parseInt(document.getElementById('progressbar').value)
		eel.pgstates("currenttime", pos,0)
		eel.pgstates("first", true, 0)
		slidermover(2);
		eel.pause(1);
		playbutton()
		})
})

window.addEventListener("load", function(){

	volslide = document.getElementById('volslider');
	volslide.addEventListener("mouseup", setvolume)
	volslide.addEventListener("drag", setvolume)
	volslide.addEventListener("mousedown", setvolume)

})


function setvolume()
{
	pos = parseFloat(document.getElementById('volbar').value/100);
	eel.pgstates("volume",pos,0);
	eel.setvolplay();
}

