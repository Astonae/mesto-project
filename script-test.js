// Поиск попапов
const buttonEditProile = document.querySelector('.profile__button-edit');
const buttonPicture = document.querySelector('.profile__button-add');
const popupClose = document.querySelector('.popup__closed-button');
const popupOpen = document.querySelector('.popup_opened');

// Поиск редактирование форм профиля  popup
let nameProfile = document.getElementById('name');
let aboutProfile = document.getElementById('about');
let profileInfo = document.querySelector('.profile__info');
const formElement = document.querySelector('.form');
const addButton = document.querySelector('.form__button');

/* ------------------------------------------------------- */

// Открытие и закрытие попапа
popup.classList.remove('popup_opened');
function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', closePopup);
buttonEditProile.addEventListener('click', openPopup);
buttonPicture.addEventListener('click', openPopup);

/* ------------------------------------------------------- */

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
	// Вставьте новые значения с помощью textContent
	profileInfo.firstElementChild.textContent = nameProfile.value; // Выбираем первый элемент контейнера .profile__info, меняем  текст
	profileInfo.lastElementChild.textContent = aboutProfile.value; // Выбираем последний элемент контейнера .profile__info, меняем  текст
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
	formElement.addEventListener('submit', handleFormSubmit);
	addButton.addEventListener('click', closePopup); // Закрываем попап при клике на сохранить

/* ------------------------------------------------------- */



function createCard(name, link) {
  const cardTemplate = document.querySelector('#card-template').content; // Шаблон карточки
  const cardClone = document.querySelector('.card').cloneNode(true); // Клонирование карточки

  // Клонироуем элементы карточки


  cardClone.querySelector('.card__image').addEventListener('click', function (evt) {
    PopupImage(name, link)
    evt.target.classList.toggle('.card__image');
  });
  cardDeleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    elementsClone.remove();

    return cardClone;
  })

  // Добавляем массив карточек в разметку
  initialCards.forEach(item => {
    newCards.prepend(createCard(item.link, item.name));
  });

  //открытие и закрытие попапа добавления нового фото

  buttonPicture.addEventListener('click', () => {
  openPopup(popupPicture);
});

popupClose.addEventListener('click', () => {
  closePopup(popupPicture);
});

// реализация работы кнопки добавления нового фото

addButton.addEventListener('click', () => {
  closePopup(popupAdd);
});



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitCardForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  newCards.prepend(createCard(linkInput.value, nameInput.value))
}
}
