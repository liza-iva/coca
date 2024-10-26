const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const headerHeight = header.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  // Если прокручиваем вниз — скрываем шапку
  if (scrollDistance > lastScrollTop && scrollDistance > headerHeight) {
    header.classList.add('header--hidden');
    header.classList.remove('header--show');
  } else {
    // Если прокручиваем вверх — показываем шапку
    header.classList.remove('header--hidden');
    header.classList.add('header--show');
  }

  // Если на самом верху страницы, убираем фиксированный стиль
  if (scrollDistance === 0) {
    header.classList.remove('header--show');
  }

  lastScrollTop = scrollDistance;
});

// Функция для проверки видимости overlay
function updateHeaderTransparency() {
  if (overlay.classList.contains('overlay--visible')) {
    header.classList.add('header--transparent');
  } else {
    header.classList.remove('header--transparent');
  }
}

// Следим за изменениями класса overlay
const observer = new MutationObserver(updateHeaderTransparency);
observer.observe(overlay, { attributes: true, attributeFilter: ['class'] });

// Вызовем проверку прозрачности один раз при загрузке
updateHeaderTransparency();