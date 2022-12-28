// Поиск попапов
const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonPicture = document.querySelector('.profile__button-add');
const popupProfile = document.querySelector('#popup-profile');
const popupProfileButton = popupProfile.querySelector('.popup__closed-button');
const popupProfileCreateButton = popupProfile.querySelector('.form__button');
const popupPicture = document.querySelector('#popup-picture');
const popupPictureButton = popupPicture.querySelector('.popup__closed-button');
const popupPictureCreateButton = popupPicture.querySelector('.form__button');
const popupCloses = document.querySelectorAll('.popup__closed-button');
const popupImg = document.querySelector('#popup-img');
const popupImgButton = popupImg.querySelector('.popup__closed-button');

// Поиск редактирование форм
const nameProfile = document.getElementById('name');
const aboutProfile = document.getElementById('about');
const profileInfo = document.querySelector('.profile__info');
const formCardsProfile = document.forms['form__profile'];
const formCardsAdd = popupPicture.querySelector('.form');
const nameInput = popupPicture.querySelector('#title');
const linkInput = popupPicture.querySelector('#link');
const popupImage = document.querySelector('.popup__image');
const popupTitleImage = document.querySelector('.popup__title-image');

// Добавление карточек
const blockCards = document.querySelector('.cards');

/* ------------------------------------------------------- */

// Открытие и закрытие попапа
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

popupCloses.forEach(function (button) {
  const popup = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopup(popup);
  });
});

/* ------------------------------------------------------- */

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmitProfile(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
	// Вставьте новые значения с помощью textContent
	profileInfo.firstElementChild.textContent = nameProfile.value; // Выбираем первый элемент контейнера .profile__info, меняем текст
	profileInfo.lastElementChild.textContent = aboutProfile.value; // Выбираем последний элемент контейнера .profile__info, меняем текст

  popupProfileCreateButton.addEventListener('click', function () { // Закрываем попап при клике на сохранить
    closePopup(popupProfile);
  });
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
  formCardsProfile.addEventListener('submit', handleFormSubmitProfile);

/* ------------------------------------------------------- */

// Добавляем карточки
function createElement(link, name) {
  const cardTemplate = document.querySelector('#card-template').content; // Шаблон карточки
  const cardClone = cardTemplate.querySelector('.card').cloneNode(true); // Клонирование карточки
  const cardDelete = cardClone.querySelector('.card__delete'); // Удаляем карточку
  const cardImage = cardClone.querySelector('.card__image');
  cardImage.src = link;
  cardImage.alt = name;
  cardClone.querySelector('.card__place');
  cardClone.querySelector('.card__name').textContent = name;
  cardClone.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardImage.addEventListener('click', function (evt) {
    openImagePopup(link, name)
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


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitCardsForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  blockCards.prepend(createElement(linkInput.value, nameInput.value));
  popupPictureCreateButton.addEventListener('click', function () { // Закрываем попап при клике на сохранить
    closePopup(popupPicture);
  });
  linkInput.value = '';
  nameInput.value = '';
}

formCardsAdd.addEventListener('submit', submitCardsForm);

function openImagePopup(link, name) {
  openPopup(popupImg);
  popupImage.src = link;
  popupImage.alt = link;
  popupTitleImage.textContent = name;
}
