import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides:  true,
    loop: true,
    modules: [Pagination],
    pagination: {
      el: '.hero__pagination',
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      381: {
        slidesPerView: 1,
        centeredSlides:  true,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 1.5,
        centeredSlides:  true,
        spaceBetween: 32,
      },
      769: {
        slidesPerView: 2,
        centeredSlides:  false,
        spaceBetween: 32,
      },
      993: {
        slidesPerView: 2.59,
        centeredSlides:  true,
        spaceBetween: 32,
      },
      // 1201: {
      //   slidesPerView: 2.59,
      //   centeredSlides:  true,
      // },
    },
  });
};