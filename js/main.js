$(document).ready(function() {






$('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText:[],
        autoplay:true,
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
    })



$('.project-active').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    }) 




$('.blog-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
 })

    
    $('.brand-active').owlCarousel({
        loop:true,
        nav:false,
        margin:50,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        autoplay:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })













    
})