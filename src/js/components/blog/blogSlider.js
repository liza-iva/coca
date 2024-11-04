import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 2.5,
    spaceBetween: 32,
    // loop: true,
    // centeredSlides: true,
    modules: [Pagination],
    pagination: {
      el: '.hero__pagination',
      dynamicBullets: true,
      clickable: true,
    },
    // breakpoints: {
    //   993: {
    //     centeredSlides: false,
    //   },
    // },
  });
};