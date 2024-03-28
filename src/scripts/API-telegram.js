// Отправка данных формы в Телеграм
const TOKEN = "6388509099:AAFIQyVlZ4MapEiXhH2vQJh8CyZFgFoJ_mA";
const CHAT_ID = "-1002008090284";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const URL_API_DOC = `https://api.telegram.org/bot${ TOKEN }/sendDocument`;

const forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(form => form.addEventListener("submit", sendMessageTelegram));
}

function sendMessageTelegram (evt) {
  evt.preventDefault();

  const typeConnection = this.querySelector(".form__connection-fieldset input[type='radio']:checked");
  const successFormMessage = this.querySelector('.form__message--success');
  const errorFormMessage = this.querySelector('.form__message--error');

  const quiz = this.closest("#quiz");

  function formSuccess () {
    successFormMessage.classList.add('js-message-active');
    quiz && setTimeout(() => location.reload(),3000);
  }

  function formError () {
    errorFormMessage.classList.add('js-message-active');
    quiz && setTimeout(() => location.reload(),3000);
  }


  let message = `<b>Заявка Дизайн Интерьера</b>\n`;
  message += `<b>Имя: ${this.name.value} </b>\n`;
  message += `<b>Телефон: ${this.tel.value} </b>\n`;
  message += `<b>Способ связи: ${typeConnection.value} </b>\n`;


  // Если форма в квизе
  if (quiz) {
    const areaField = quiz.querySelector(".quiz-step-2__range-field");
    const checkedRoomType = quiz.querySelector(".quiz__step-1 fieldset input[type='radio']:checked");
    const checkedBudget = quiz.querySelector(".quiz__step-3 fieldset input[type='radio']:checked");
    const checkedStyleRoom = quiz.querySelector(".quiz__step-4 fieldset input[type='radio']:checked");

      message += `<b>----------</b>\n`;
      checkedRoomType? message += `<b>Тип помещения: ${checkedRoomType.value} </b>\n` : null;
      areaField ? message += `<b>Площадь помещения: ${areaField.value} </b>\n` : null;
      checkedBudget ? message += `<b>Бюджет: ${checkedBudget.value} </b>\n` : null;
      checkedStyleRoom ? message += `<b>Стиль интерьера: ${checkedStyleRoom.value} </b>\n` : null;
  }


  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  })
    .then( () => {
      console.log("Заявка отправлена");
      formSuccess();
    })
    .catch(err => {
      console.warn(err);
      formError();
    })
    .finally(() => {
      console.log("Конец");
    });
  this.reset();



  // Send Doc
  const inputFile = quiz.querySelector(".add-layout input[type='file']").files[0];

  if (inputFile) {

    const formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('document', inputFile);

    axios.post(URL_API_DOC, formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    })
      .then( () => {
        console.log("Документ отправлен");
      })
      .catch(err => {
        console.warn(err);
      })
      .finally(() => {
        console.log("Конец");
      });
    this.reset();

  }


};