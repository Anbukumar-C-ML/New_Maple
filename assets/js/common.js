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

	    $(window).on("scroll", function() {
		    if($(window).scrollTop() > $('.home_banner_bg').height()+150) {
		        $("header .bg-light").addClass("active");
		    } else { 
		       $("header .bg-light").removeClass("active");
		    }
		});
})

