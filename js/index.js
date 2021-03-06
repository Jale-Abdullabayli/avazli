AOS.init();

var carouselHeight = $('.carousel').height();

$(window).scroll(function (event) {
  var top = $(window).scrollTop();
 
  if (top <= carouselHeight) {

    $('.caption .container').css('transform', `translateY(${top*0.4}px)`)
    $('.navbar').css('box-shadow', 'none');

  }
  else{
    $('.navbar').css('box-shadow', '0px 8px 16px 6px #1219261a');
  }
})

  if (window.matchMedia('(max-width: 992px)').matches) {
      $('.navbar-collapse').wrap( "<div class='container'></div>")
  } else {
      //...
  }


//clock

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


toggle_button = $('.toogle_menu');
navbar_collapse = $('.navbar-collapse');

toggle_button.click(function () {
  $(this).toggleClass("open");
  $(navbar_collapse).toggleClass("open");
});


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})


// stop autoplay and start

  $('.owl-nav').on('click', function () {
     $('.owl-carousel').trigger('stop.owl.autoplay');
       $('.owl-carousel').trigger('play.owl.autoplay',[5000]);
  });
  
  $('.owl-dot').on('click', function () {
     $('.owl-carousel').trigger('stop.owl.autoplay');
       $('.owl-carousel').trigger('play.owl.autoplay',[5000]);
  });
  