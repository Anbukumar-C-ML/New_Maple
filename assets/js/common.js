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
		// });
		// $(window).on("scroll", function() {
		    if($(window).scrollTop() > $('.banner_size').height()+150) {
		    	console.log('inner')
		        $("header .new_header_banner").addClass("active");
		    } else { 
		       $("header .new_header_banner").removeClass("active");
		    }
		});
})

