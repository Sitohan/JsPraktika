window.onload = function(e){
	var span  = document.querySelector('.res');
	var inp1 = document.querySelector('input[name=num1]');
	var inp2 = document.querySelector('input[name=num2]');

	var buttons = document.querySelectorAll('input[type=button]');

	for(var i = 0; i < buttons.length; i++){
		buttons[i].onclick = function(){
			var op = this.getAttribute('data-op');
			Cacl(op);
		}
	}

	function Cacl(op){

		var a = parseInt(inp1.value);
		var b = parseInt(inp2.value);
		var res;

		switch(op){
			
			case '+':
			res = a + b;
			break;
			
			case '-':
			res = a - b;
			break;
			
			case '*':
			res = a * b;
			break;

			case '/':
			res = a / b;
			break;

			default:
			res = 'Неизвестная операция!';

			
		}
		span.innerHTML = res;
		
	}
	
}



