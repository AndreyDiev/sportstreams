const popupReg = document.querySelector('.popup-reg');
const headerRegBtn = document.querySelector('.header__register-button');
const popupRegContainer = document.querySelector('.popup-reg__container');

headerRegBtn.addEventListener('click', () => {
  popupReg.classList.add('popup_active');
  console.log('1');
});

popupReg.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == popupRegContainer || popupRegContainer.contains(target);
  const menu_is_active = popupReg.classList.contains("popup_active");

  if (!its_menu && menu_is_active) {
      popupReg.classList.remove('popup_active');
      console.log('2');
  }
});

const popupLoginToggleBtn = document.querySelector('.popup-reg__login');
const popupLogin = document.querySelector('.popup-log');
const popupLogContainer = document.querySelector('.popup-log__container');

popupLoginToggleBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  popupReg.classList.remove('popup_active');
  popupLogin.classList.add('popup_active');
})

const popupRegToggleBtn = document.querySelector('.popup-log__register');

popupRegToggleBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  popupLogin.classList.remove('popup_active');
  popupReg.classList.add('popup_active');
});

popupLogin.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == popupLogContainer || popupLogContainer.contains(target);
  const menu_is_active = popupLogin.classList.contains("popup_active");

  if (!its_menu && menu_is_active) {
      popupLogin.classList.remove('popup_active');
      console.log('2');
  }
});
