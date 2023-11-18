
//search-box=tabs
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


var swiper = new Swiper(".packages-slider", {
     slidesPerView: "4",
     spaceBetween: 30,
     loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
     300: {
       slidesPerView: 1
     },
     400: {
       slidesPerView: 1
     },
     700: {
       slidesPerView: 1
     },
     992: {
       slidesPerView: 4
     }
   }
});



var swiper = new Swiper(".explore-deals-slider", {
     slidesPerView: "4",
     spaceBetween: 30,
     loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
         breakpoints: {
     300: {
       slidesPerView: 1
     },
     400: {
       slidesPerView: 1
     },
     700: {
       slidesPerView: 1
     },
     992: {
       slidesPerView: 4
     }
   }
});



  $(".mobile_menu").click(function(){
     $(".menu").addClass("active");
     $(".overlay").addClass("active");
     $("body").addClass("active");
});

  $(".overlay").click(function(){
     $(".menu").removeClass("active");
     $(".overlay").removeClass("active");
     $("body").removeClass("active");
});


//hotel details slider js=============
var swiper = new Swiper(".hotel_slider", {
      slidesPerView: 3,
      spaceBetween:10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

        breakpoints: {
    300: {
      slidesPerView: 1
    },
    767: {
      slidesPerView:2
    },
    992: {
      slidesPerView:3
    }
  }
});


//hotel-details js ======
$(".r_btn").click(function (){
  $(".r_btn").removeClass("active");
  $(this).addClass("active");
});



class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
  checkTabContainerPosition() {
    let offset = $('.et-hero-tabs').offset() + $('.et-hero-tabs').height() - this.tabContainerHeight;
    if ($(window).scrollTop() > offset){
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();


//   // bannerSwiper
//   var swiper = new Swiper(".bannerSwiper", {
//     loop: true,
//     speed:3500,
//     autoplay: {
//         delay: 200,
//         disableOnInteraction: false,
//       },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


 

// var swiper = new Swiper(".airlines-slider", {
//   slidesPerView: "8",
//   spaceBetween: 30,
//   loop: true,
//   // speed: 2000,
//   // autoplay: {
//   //   delay: 100,
//   //   disableOnInteraction: false,
//   // },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//   breakpoints: {
//     300: {
//       slidesPerView: 3
//     },
//     400: {
//       slidesPerView: 3
//     },
//     700: {
//       slidesPerView: 4
//     },
//     768: {
//       slidesPerView: 8
//     }
//   }

// });



