import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    modules: [Pagination],
    pagination: {
      el: '.insight__pagination',
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    slidesPerView: 'auto',
    spaceBetween: 25,
    loop: true,
    centeredSlides: false,
    modules: [Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};

export const useAboutHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
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
        centeredSlides: true,
        spaceBetween: 15,
      },
      577: {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 32,
      },
      769: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 32,
      },
      993: {
        slidesPerView: 2.59,
        centeredSlides: true,
        spaceBetween: 32,
      },
    },
  });
};

export const useAboutTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 1.6,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    modules: [Pagination],
    pagination: {
      el: '.team__pagination',
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      381: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      577: {
        slidesPerView: 3,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
};

export const useBlogHeroSlider = () => {
  let swiper;
  function initSwiper() {
    swiper = new Swiper('.hero__slider', {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 16,
      initialSlide: 1,
      modules: [Pagination],
      pagination: {
        el: '.hero__pagination',
        dynamicBullets: true,
        clickable: true,
      },

      breakpoints: {
        1201: {
          slidesPerView: 'auto',
          centeredSlides: false,
          initialSlide: 0,
          spaceBetween: 32,
        },
        993: {
          slidesPerView: 'auto',
          initialSlide: 1,
          spaceBetween: 32,
          centeredSlides: true,
        },
        577: {
          slidesPerView: 'auto',
          centeredSlides: true,
        },
      },
    });
  }
  function reinitializeSwiper() {
    if (swiper) {
      swiper.destroy(true, true); // Удаляем текущий слайдер
    }
    initSwiper(); // Создаем новый слайдер
  }

  // Слушаем событие изменения таба и обновляем слайдер
  document.addEventListener('tabChange', (event) => {
    const { tabName } = event.detail;
    reinitializeSwiper(tabName); // Перезапускаем слайдер с первым слайдом для нового таба
  });

  // Инициализируем слайдер при загрузке
  initSwiper();
};
