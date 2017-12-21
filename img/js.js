window.onload = function(e){

	var links = document.querySelectorAll('a[target=_blank]');

	for(var i = 0; i < links.length; i++){
		links[i].onclick = confirmAway;
	}

	function confirmAway(e){
		if(!confirm('!')){
			return false;
		}
	}
	
	var images = document.querySelectorAll('.gallery img');
	for(var i = 0; i < images.length; i++){
		images[i].onmousedown = stopMove;
		images[i].oncontextmenu = stopMove;
	}
	function stopMove(){
		return false;
	}
}

















