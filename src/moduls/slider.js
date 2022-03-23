import Swiper, { Navigation } from 'swiper';

const slider = () => {

  const swiperBenefits = new Swiper('.benefits-inner', {
   
    moduls: [Navigation],
    loop: true,
    navigation: {
      nextEl: '.benefits__arrow--right',
      prevEl: '.benefits__arrow--left',
    },
  
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 0
      },
    }
  });

  const swiperSirvice = new Swiper('.service-slider', {

    // configure Swiper to use modules
    moduls: [Navigation],
    
    loop: true,
  navigation: {
    nextEl: '.services__arrow--right',
    prevEl: '.services__arrow--left',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
  });

};

export default slider;