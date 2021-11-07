var slider = new Swiper('#slider .swiper-container', {
  pagination: {
    el: '#slider .swiper-pagination',
    clickable: true,

  },
});

var gallery = new Swiper('#gallery .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 0,
  speed: 3000,
  loop: true,
  autoplay: {
    delay: 1.500,},
  breakpoints:{
    150:{
      slidesPerView: 1,
      autoHeight:true,
      
      pagination: {
        el: '#gallery .swiper-pagination',
        clickable: true,
      },
    },
320:{
      slidesPerView: 1,
      autoHeight:true,
      pagination: {
        el: '#gallery .swiper-pagination',
        clickable: true,
      },
    },
    500:{
      slidesPerView: 2,
      pagination: {
        el: '#gallery .swiper-pagination',
        clickable: true,
      },
    },
    900:{
      slidesPerView: 3,
      pagination: {
        el: '#gallery .swiper-pagination',
        clickable: true,
      },
    },
    1200:{
      slidesPerView: 5,
      pagination: {
        el: '#gallery .swiper-pagination',
        clickable: true,
      },
    },
     1600:{
      slidesPerView: 6,
      pagination: {
        el: '#gallery .swiper-pagination',
        clickable: true,
      },
    },
  },
});


let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.5 // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (let i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    let w = window.pageYOffset, // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) start = time;
      let progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash // URL с хэшем
      }
    }
  }, false);
}
  let filter_items = document.querySelectorAll('.filter_menu li');

  for (let item of filter_items) {
    item.addEventListener("click", function () {
      let data_atribute = this.getAttribute('data-filter');
      let menu_items = document.querySelectorAll('.menu_items .item');
      for (let menu_item of menu_items) {
        menu_item.classList.add('hidden');
      }
      let active_items = document.querySelectorAll('.menu_items .item.' + data_atribute);
      for (let active_item of active_items) {
        active_item.classList.remove('hidden');
      }
    });
  }

  
  $('.burger-menu').on('click', function () {
    $('.mobile__menu-list').addClass('active');

  });
  $('.close-btn').on('click', function () {
    $('.mobile__menu-list').removeClass('active');

  });
  
  $('.header__nav-link').on('click', function () {
    $('.mobile__menu-list').removeClass('active');

  });



  
  var btn = $('.arrow-top');
    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function() {
    $('html, body').animate({scrollTop: 0 }, 1000);
  });
