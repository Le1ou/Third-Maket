document.addEventListener("DOMContentLoaded", function () {
    var swiper;

    initSwiper();
    handleScreenSize();

    window.addEventListener("resize", function () {
        initSwiper();
        handleScreenSize();
      });

    function initSwiper() {
      if (swiper) {
        swiper.destroy();
      }
      swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 16,
        slideToClickedSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        grabCursor: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
        mousewheel: {
          sensitivity: 5,
        },
        slideOverflow: true,
        breakpoints: {
          375: { spaceBetween: 18 },
          500: { spaceBetween: 22 },
          700: { spaceBetween: 24 },
        },
        allowTouchMove: true,
      });
    }

    function handleScreenSize() {
      const screenSize = window.innerWidth;
      if (swiper && screenSize > 767) {
        swiper.allowTouchMove = false;
        swiper.destroy();
      }
    }

    var buttonToggle = document.querySelector('.services-button');
    var swiperToggle = document.querySelector('.services__swiper');
    var buttonImage = buttonToggle.querySelector('img');
    var buttonText = buttonToggle.querySelector('span');

    buttonToggle.addEventListener('click', function() {
        swiperToggle.classList.toggle('services__swiper--height');
        if (swiperToggle.classList.contains('services__swiper--height')) {
            buttonImage.src = 'img/show.svg';
            buttonText.textContent = 'Показать все';
        } else {
            buttonImage.src = 'img/hide.svg';
            buttonText.textContent = 'Скрыть';
        }        
    });
  });