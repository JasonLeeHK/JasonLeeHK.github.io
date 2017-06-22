$( document ).ready(function() {
    console.log( "ready!" );
    var flag= true;
    $('#mybutton').click(function(){	
    	if (flag==true) {
    		$('#name').css('color', 'red');
    		flag=false;
		}
   		else {
    		$('#name').css('color', '#007eab');
    		flag=true;
		}
	
    });
    });


