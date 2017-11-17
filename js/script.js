var navMain = document.querySelector('.burger-menu');
var navToggle = document.querySelector('.burger-menu__toggle');

navMain.classList.remove('burger-menu--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('burger-menu--closed')) {
    navMain.classList.remove('burger-menu--closed');
    navMain.classList.add('burger-menu--opened');
  } else {
    navMain.classList.add('burger-menu--closed');
    navMain.classList.remove('burger-menu--opened');
  }
});

var modal = document.querySelector('.modal');
var modalButton = document.querySelectorAll('.catalog__basket');
var modalAddButton = document.querySelector('.modal-form__btn');

for (var i = 0; i < modalButton.length; i++) {
  modalButton[i].addEventListener('click', function(e) {
  e.preventDefault();
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
  } else {
  }
  })
};

modalAddButton.addEventListener('click', function() {
  modal.classList.add('modal--closed');
});

(function() {
  var center = [59.938631, 30.323055];

  google.maps.event.addDomListener(window, "load", function() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: new google.maps.LatLng(center[0], center[1]),
      scrollwheel: false,
      disableDoubleClickZoom: true
    });

    var image = '../img/icon-map-pin.svg';
    var beachMarker = new google.maps.Marker({
      position: {lat: 59.938631, lng: 30.323055},
      map: map,
      icon: image
    });
  });
})();

var contactsMap = document.querySelector('.contacts__map');

contactsMap.classList.add('contacts__map--nojs');