

	$(function () {
		var filterList = {
			init: function () {
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.heading1, .heading2, .heading3, .heading4'  
      		}     
				});								
			}
		};
		// Run the show!
		filterList.init();
	});


 $(document).ready(function() {
  $(".fancybox").fancybox();
  
 });




// -------------------------------------------------------------
    // Back To Top  
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());
	


// -------------------------------------------------------------
    // Back To Top  
    // -------------------------------------------------------------




// -------------------------------------------------------------
    // Fancy Gallery Start  
    // -------------------------------------------------------------

$(document).ready(function () {$('.fb').fancybox();});
// -------------------------------------------------------------
    // Fancy Gallery End 
    // -------------------------------------------------------------


// -------------------------------------------------------------
    // ScrollBar Start
    // -------------------------------------------------------------

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});
// -------------------------------------------------------------
    // ScrollBar End 
    // -------------------------------------------------------------

// -------------------------------------------------------------
    // Loader Start 
    // -------------------------------------------------------------

window.onload = function(){$('.loader').fadeOut();}


// -------------------------------------------------------------
    // Loader End
    // -------------------------------------------------------------



$(function(){
    $("div#navbar > ul > li").each(function(){
        var mobbody = $(this).html();
        $('.sidenav').append('<div>'+mobbody+'</div>');
    });
    $( "#mySidenav a" ).each(function(){
        if ($(this).find(".caret").length > 0){ 
          $(this).parent('div').attr('id','hassubmenu');
          $(this).after('<i class="fa fa-angle-down"></i>');
        }
    });
    $('#mySidenav #hassubmenu i.fa.fa-angle-down').click(function(){
        $(this).next('ul.dropdown-menu').slideToggle();
    }
    );
});

function openNav() {
        document.getElementById("mySidenav").style.left = "0px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.left = "-250px";
}

$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});