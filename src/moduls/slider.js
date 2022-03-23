import Swiper, { Navigation } from 'swiper';

const slider = () => {
  
  const swiperBenefits = new Swiper('.benefits-inner', {
   
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 7,
    // Navigation arrows
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  });

  const swiperSirvice = new Swiper('.service-slider', {

   modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 25,
    // Navigation arrows
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
  });
  

};

export default slider;