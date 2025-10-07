// Your custom JavaScript
$(document).ready(function () {

  // Smooth mobile menu handling
  // Close mobile menu when clicking outside
  $(document).click(function (e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Close mobile menu when clicking a link
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });


  // Custom play button logic
  document.querySelectorAll('.video-wrapper').forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const playBtn = wrapper.querySelector('.video-play-btn');

    playBtn.addEventListener('click', () => {
      video.play();
      wrapper.classList.add('playing');
    });

    video.addEventListener('pause', () => {
      wrapper.classList.remove('playing');
    });

    video.addEventListener('ended', () => {
      wrapper.classList.remove('playing');
    });
  });

  // Testimonials Video Swiper
  const testimonialVideoSwiper = new Swiper('.testimonial-video-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.testimonial-video-navigation .swiper-button-next',
      prevEl: '.testimonial-video-navigation .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },

    pagination: {
      el: '.testimonial-video-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
        spaceBetween: 100
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 100
      }
    }
  });

  var featuresOneSwiper = new Swiper(".features-one-slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    navigation: {
      nextEl: '.features-one-navigation .swiper-button-next',
      prevEl: '.features-one-navigation .swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    touchEventsTarget: 'container',
    simulateTouch: true,
    grabCursor: true,
    breakpoints: {
      0: { // mobile
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
      768: { // tablet
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      1200: { // desktop
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });


  var featuresTwoSwiper = new Swiper(".features-two-slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    navigation: {
      nextEl: '.features-two-navigation .swiper-button-next',
      prevEl: '.features-two-navigation .swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    touchEventsTarget: 'container',
    simulateTouch: true,
    grabCursor: true,
    breakpoints: {
      0: { // mobile
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
      768: { // tablet
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      1200: { // desktop
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });

  var proofMobileSwiper = new Swiper(".proofSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.proof-mobile-navigation .swiper-button-next',
      prevEl: '.proof-mobile-navigation .swiper-button-prev',
    },
    pagination: {
      el: ".proof-mobile-pagination",
      clickable: true,
    },
  });

  var testimonialSwiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.testimonial-carousel-navigation .swiper-button-next',
      prevEl: '.testimonial-carousel-navigation .swiper-button-prev',
    },
    pagination: {
      el: ".testimonial-slider-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      768: {
        slidesPerView: 1,
      }
    }
  });


});

