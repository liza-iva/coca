const minWidth = 576;

function toggleAccordion() {
  const titles = document.querySelectorAll('.js-accordion-title');

  // Проверяем текущую ширину экрана и активируем аккордеон только для ширины <= 380px
  if (window.innerWidth <= minWidth) {
    titles.forEach(function (title) {
      title.addEventListener('click', function () {
        const content = title.nextElementSibling;
        const arrow = title.querySelector('.footer__item-arrow');

        // Закрываем все подсписки, кроме текущего
        document.querySelectorAll('.js-accordion-content').forEach(function (sublist) {
          if (sublist !== content) {
            sublist.classList.remove('is-open');
            sublist.style.maxHeight = null;
            const openTitle = sublist.previousElementSibling;
            const openArrow = openTitle.querySelector('.footer__item-arrow');
            if (openArrow) {
              openArrow.classList.remove('flip'); // Убираем отражение у других стрелок
            }
          }
        });

        // Открываем или закрываем текущий подсписок
        if (content.classList.contains('is-open')) {
          content.classList.remove('is-open');
          content.style.maxHeight = null; // Закрываем
          arrow.classList.remove('flip'); // Возвращаем стрелку в исходное положение
        } else {
          content.classList.add('is-open');
          content.style.maxHeight = content.scrollHeight + 'px'; // Открываем
          arrow.classList.add('flip'); // Отражаем стрелку
        }
      });
    });
  } else {
    // Отключаем аккордеон для ширины больше 380px
    document.querySelectorAll('.js-accordion-content').forEach(function (sublist) {
      sublist.classList.add('is-open');
      sublist.style.maxHeight = null;
    });
  }
}

// Запускаем функцию при загрузке страницы
toggleAccordion();

// Обновляем состояние аккордеона при изменении размера окна
window.addEventListener('resize', toggleAccordion);