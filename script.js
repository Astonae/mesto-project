// Поиск попапов
const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonPicture = document.querySelector('.profile__button-add');
const popupProfile = document.querySelector('#popup-profile');
const popupProfileButton = popupProfile.querySelector('.popup__closed-button');
const popupProfileCreateButton = popupProfile.querySelector('.form__button');
const popupPicture = document.querySelector('#popup-picture');
const popupPictureButton = popupPicture.querySelector('.popup__closed-button');
const popupPictureCreateButton = popupPicture.querySelector('.form__button');
const popupClose = document.querySelectorAll('.popup__closed-button');
const popupImg = document.querySelector('#popup-img');
const popupImgButton = popupImg.querySelector('.popup__closed-button');

// Поиск редактирование форм
let nameProfile = document.getElementById('name');
let aboutProfile = document.getElementById('about');
let profileInfo = document.querySelector('.profile__info');
const formCardsProfile = popupProfile.querySelector('.form');
const formCardsAdd = popupPicture.querySelector('.form');
const nameInput = popupPicture.querySelector('#title');
const linkInput = popupPicture.querySelector('#link');
const popupImage = document.querySelector('.popup__image');
const popupTitleImage = document.querySelector('.popup__title-image');

// Добавление карточек
const blockCards = document.querySelector('.cards');

/* ------------------------------------------------------- */

// 1. Открытие и закрытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

buttonEditProfile.addEventListener('click', function () {
  openPopup(popupProfile);
});
buttonPicture.addEventListener('click', function () {
  openPopup(popupPicture);
});

popupClose.forEach(function (button) {
  const popup = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopup(popup);
  });
});

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
  formCardsProfile.addEventListener('submit', handleFormSubmit);
	popupProfileCreateButton.addEventListener('click', function () { // Закрываем попап при клике на сохранить
    closePopup(popupProfile);
});

/* ------------------------------------------------------- */

// Добавляем карточки
function createElement(link, name) {
  const cardTemplate = document.querySelector('#card-template').content; // Шаблон карточки
  const cardClone = cardTemplate.querySelector('.card').cloneNode(true); // Клонирование карточки
  const cardDelete = cardClone.querySelector('.card__delete'); // Удаляем карточку
  cardClone.querySelector('.card__image').src = link;
  cardClone.querySelector('.card__image').alt = name;
  cardClone.querySelector('.card__place');
  cardClone.querySelector('.card__name').textContent = name;
  cardClone.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardClone.querySelector('.card__image').addEventListener('click', function (evt) {
    newPopupImage(link, name)
    evt.target.classList.toggle('.card__image');
  });
  cardDelete.addEventListener('click', () => {
    cardClone.remove();
  });
  return cardClone;
};

// Добавляем в разметку
initialCards.forEach(function (item) {
  blockCards.append(createElement(item.link, item.name));
})

// Добавляем открытие/закрытие попап
buttonPicture.addEventListener('click', () => {
  openPopup(popupPicture);
});

popupPictureButton.addEventListener('click', () => {
  closePopup(popupPicture);
});

popupPictureCreateButton.addEventListener('click', () => {
  closePopup(popupPicture);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitCardsForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  blockCards.prepend(createElement(linkInput.value, nameInput.value));
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formCardsAdd.addEventListener('submit', submitCardsForm);

function newPopupImage(link, name) {
  openPopup(popupImg);
  popupImage.src = link;
  popupImage.alt = link;
  popupTitleImage.textContent = name;
}
