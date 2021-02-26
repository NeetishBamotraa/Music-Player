
	
function Menu(x)
{
	x.classList.toggle("change");
	var x = document.getElementById('sidebar');
	var y = document.getElementById('menu');
	var z = document.getElementsByClassName('optiontitle');
	var m = document.getElementById('mainarea');

	if(x.style.width == "150px")
	{
		x.style.width = "50px";
		y.style.display = "none";

		for( item of z)
		{
			item.style.display = "none";
		}

		m.style.width = "calc(100% - 50px)";
		m.style.left = "50px";
		
	}
	else
	{
		x.style.width = "150px";
		y.style.display = "block";
		
		for( item of z)
		{
			item.style.display = "block";
		}

		m.style.width = "calc(100% - 150px)";
		m.style.left = "150px";
	}

		
}


function loadOptions(x)
{
	if(x==1)
	{
		document.getElementById('main_area').src = "addsong.html";
	}

	if(x==2)
	{
		document.getElementById('main_area').src = "playlist.html";
	}

	if(x==3)
	{
		document.getElementById('main_area').src = "setting.html";
	}

	if(x==4)
	{
		document.getElementById('main_area').src = "default.html";
	}
}