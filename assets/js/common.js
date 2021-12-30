$(function(){
	  let x=3; 
	    $('#myList li').slice(0, 3).show();
	    $('#loadMore').on('click', function (e) {
	        e.preventDefault();
	        x = x+3;
	        $('#myList li').slice(0, x).show(); 
	        if(x == $('#myList li').length){
	        	$('#loadMore').hide()
	        }else{
	        	$('#loadMore').show()
	        }
	    });  
})

