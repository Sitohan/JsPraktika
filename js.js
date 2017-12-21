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
	
	
}

















