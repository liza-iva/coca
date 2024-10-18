const minWidth = 380;

function toggleAccordion() {
  const titles = document.querySelectorAll('.js-accordion-title');

  // Проверяем текущую ширину экрана и активируем аккордеон только для ширины <= 380px
  if (window.innerWidth <= minWidth) {
    titles.forEach(function (title) {
      title.addEventListener('click', function () {
        const content = title.nextElementSibling;

        // Закрываем все подсписки, кроме текущего
        document.querySelectorAll('.js-accordion-content').forEach(function (sublist) {
          if (sublist !== content) {
            sublist.classList.remove('is-open');
            sublist.style.maxHeight = null;
          }
        });

        // Открываем или закрываем текущий подсписок
        if (content.classList.contains('is-open')) {
          content.classList.remove('is-open');
          content.style.maxHeight = null; // Закрываем
        } else {
          content.classList.add('is-open');
          content.style.maxHeight = content.scrollHeight + 'px'; // Открываем
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