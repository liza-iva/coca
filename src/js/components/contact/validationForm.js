export const useValidationForm = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const formReq = document.querySelectorAll('.js-req');

    form.addEventListener('submit', formSend);

    formReq.forEach((input) => {
      input.addEventListener('input', () => {
        formRemoveError(input);
        if (input.classList.contains('js-email')) {
          if (emailTest(input)) {
            formAddError(input);
          }
        } else if (input.classList.contains('js-phone')) {
          if (phoneTest(input)) {
            formAddError(input);
          }
        } else if (
          input.getAttribute('type') === 'checkbox' &&
          !input.checked
        ) {
          formAddError(input);
        } else {
          if (input.value === '') {
            formAddError(input);
          }
        }
      });
    });

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      if (error === 0) {
      } else {
        alert('Заполните обязательные поля');
      }
    }

    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('.js-req');

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('js__email')) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else if (input.classList.contains('js-phone')) {
          if (phoneTest(input)) {
            formAddError(input);
            error++;
          }
        } else if (
          input.getAttribute('type') === 'checkbox' &&
          input.checked === false
        ) {
          formAddError(input);
          error++;
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }
      }
      return error;
    }

    function formAddError(input) {
      input.parentElement.classList.add('js-error');
      input.classList.add('js-error');
    }

    function formRemoveError(input) {
      input.parentElement.classList.remove('js-error');
      input.classList.remove('js-error');
    }

    // Функция теста email
    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    // Функция теста телефона
    function phoneTest(input) {
      return !/^\+?[\d\s\-\(\)]+$/.test(input.value);
    }
  });
};