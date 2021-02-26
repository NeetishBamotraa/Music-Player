
function go(){
document.getElementsByTagName("form")[0].submit();

setTimeout(go2, 1000);
}

function go2()
{
	document.getElementById('youtubesite').style.display = block;
	document.getElementById('extra').innerText = window.location.href;
}

window.addEventListener('load', () => {go();})