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
