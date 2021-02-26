
function fromfile()
{
	eel.add_songs();
	eel.pgstates("songs_present", true, 0);
}

function fromyoutube()
{
	window.open("Youtube.html" ,"", "width=1000,top=400,left=400,height=700,fullscreen=no")
}

async function resumestate()
{
	if( (await (eel.pgstates(0,0,"running_state")()).then( (value) => {return value;})))
	{
		eel.current_title()(currenttitle);
	}

}

function currenttitle(x)
{
	document.getElementById('songbartext').innerHTML = x;
}

window.addEventListener("load", resumestate)