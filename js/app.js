(function (window, document, drawModule, undefined) {

var btn = document.getElementById('btn');
btn.addEventListener("click", function(){ drawModule.init();});

	document.onkeydown = function(event) {

	  keyCode = event.keyCode;

	  switch(keyCode) {

	  case 37:
	    if (direction != 'right') {
	    	direction = 'left';
				console.log(direction);
	    }
			break;

	  case 39:
	    if (direction != 'left') {
	    	direction = 'right';
	    	console.log(direction);
	    }
		 	break;

	  case 38:
	    if (direction != 'down') {
	    	direction = 'up';
	    	console.log(direction);
			}
			break;

	  case 40:
	    if (direction != 'up') {
	    	direction = 'down';
	    	console.log('down');
	    }
			break;

	  }
  }


})(window, document, drawModule);
