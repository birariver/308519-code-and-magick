'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizardCoat = setup.querySelector('.wizard-coat');
var setupWizardEyes = setup.querySelector('.wizard-eyes');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  if (document.activeElement !== setup.querySelector('.setup-user-name')) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupWizardCoat.addEventListener('click', function (evt) {
  setupWizardCoat.style.fill = coatColors[Math.floor(evt.clientY % 6)];
});

setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = eyesColors[Math.floor((Math.random() * 4))];
});

var colorIndex = 0;
setupWizardFireball.addEventListener('click', function () {
  setupWizardFireball.style.background = fireballColors[colorIndex % 5];
  colorIndex++;
});
