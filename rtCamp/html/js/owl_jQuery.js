$(document).ready(function() {
/*$('.section .banner .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	items:1,
    nav:false,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
});
*/
$('.videos .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	slideBy:1,
	pagination:false,
	dots:false,
	touchDrag:false,	
	arrow:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
 
});

$(document).ready(function() {
$('.partners .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
	slideBy:5,
	pagination:false,
	dots:false,
	touchDrag:false,	
	arrow:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
 
});
