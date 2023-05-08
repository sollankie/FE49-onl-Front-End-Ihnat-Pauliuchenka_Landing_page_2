const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });