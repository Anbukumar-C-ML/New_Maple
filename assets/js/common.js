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
		    if($(window).scrollTop() > 100) {
		    	console.log('inner')
		        $("header .new_header_banner").addClass("active");
		    } else { 
		       $("header .new_header_banner").removeClass("active");
		    }
		});
		 $('.tab_list a').click(function(){ 
		 	$('.tab_list a').removeClass('active')
		 	$(this).addClass('active')
		 	// if($(this).attr('href').split('#')[1] == 'tab1'){
		 	// 	$('.case_sectionPadding .divide_tabs#tab1').scrollTop(200);
		 	// }
		 	// if($(this).attr('href').split('#')[1] == 'tab2'){
		 	// 	$('.case_sectionPadding .divide_tabs#tab2').scrollTop(100);
		 	// }
		 	// $(this).each(function(){
		 	// 		alert($('.case_sectionPadding .divide_tabs').attr('id'))
				//  	if($(this).attr('href').split('#')[1]){
				//  		$('.case_sectionPadding .divide_tabs').scrollTop()+100;
				//  		// alert($('.case_sectionPadding .divide_tabs').id)
				//  		alert('In')
				//  	}else{
				//  		alert('Out')
				//  	}	
		 	// })
		 	
		 	 
		 });


		// AOS.init();

		 
})

