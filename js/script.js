var buttonMessage = document.querySelector('.button-message');
var popupMessage = document.querySelector('.popup-message');
var closeButton = document.querySelectorAll('.button-close');
var formMessage = popupMessage.querySelector('form');
var userName = popupMessage.querySelector('[name=user-name]');
var userEmail = popupMessage.querySelector('[name=user-email]');
var textMessage = popupMessage.querySelector('textarea');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

var popupMap = document.querySelector('.popup-map');
var mapImage = document.querySelector('.map');

//Feedback

try {
	storageName = localStorage.getItem('name');
	storageEmail = localStorage.getItem('eMail');
} catch (err) {
	isStorageSupport = false;
}

buttonMessage.addEventListener('click', function(evt) {
	evt.preventDefault();
	popupMessage.classList.add('popup-show');
	if (storageName) {
		userName.value = storageName;
		userEmail.focus();
	} else if (storageEmail) {
		userEmail.value = storageEmail;
		textMessage.focus();
	} else {
		userName.focus();
	}
});



for (var i = 0; i < closeButton.length; i++) {
	closeButton[i].addEventListener('click', function(evt) {
		evt.preventDefault();
		popupMessage.classList.remove('popup-show');
		popupMap.classList.remove('popup-show');
		popupMessage.classList.remove('modal-error');
	});
};

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		if (popupMessage.classList.contains('popup-show')) {
			evt.preventDefault();
			popupMessage.classList.remove('popup-show');
		}
	}
});

formMessage.addEventListener('submit', function(evt) {
	if (!userName.value || !userEmail.value) {
		evt.preventDefault();
		popupMessage.classList.remove('modal-error');
		popupMessage.offsetWidth = popupMessage.offsetWidth;
		popupMessage.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('name', userName.value);
			localStorage.setItem('eMail', userEmail.value);
		}
	}
});

//popapMap

mapImage.addEventListener('click', function(evt) {
	evt.preventDefault();
	popupMap.classList.add('popup-show');
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		if (popupMap.classList.contains('popup-show')) {
			evt.preventDefault();
			popupMap.classList.remove('popup-show');
		}
	}
})
