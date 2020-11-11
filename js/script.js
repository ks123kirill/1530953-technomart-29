//promo slider
let slideLeft = document.querySelector('.button_slide_left');
let slideRight = document.querySelector('.button_slide_right');
let slider = document.querySelector('.slider');
let slideOne = document.querySelector('.slide_one');
let slideTwo = document.querySelector('.slide_two');
let sliderButtonOne = document.querySelector('.slider_button_one');
let sliderButtonTwo = document.querySelector('.slider_button_two');

slideLeft.onclick = function() {
  slider.classList.toggle('slider_wrapper_2');
  slideOne.classList.toggle('slide_hidden');
  sliderButtonOne.classList.toggle('current');
  slider.classList.toggle('slider_wrapper_1');
  slideTwo.classList.toggle('slide_hidden');
  sliderButtonTwo.classList.toggle('current');
};

slideRight.onclick = function() {
  slider.classList.toggle('slider_wrapper_2');
  slideOne.classList.toggle('slide_hidden');
  sliderButtonOne.classList.toggle('current');
  slider.classList.toggle('slider_wrapper_1');
  slideTwo.classList.toggle('slide_hidden');
  sliderButtonTwo.classList.toggle('current');
};

//services slider
let buttonDelivery = document.querySelector('.button_delivery');
let buttonGuarantee = document.querySelector('.button_quarantee');
let buttonCredit = document.querySelector('.button_credit');
let servicesBlockThree = document.querySelector('.services_block_three');
let servicesSlideOne = document.querySelector('.services_slide_one');
let servicesSlideTwo = document.querySelector('.services_slide_two');
let servicesSlideThree = document.querySelector('.services_slide_three');

buttonDelivery.onclick = function() {
  servicesBlockThree.classList.remove('services_wrapper_2');
  servicesBlockThree.classList.remove('services_wrapper_3');
  servicesBlockThree.classList.add('services_wrapper_1');
  servicesSlideOne.classList.remove('slide_hidden')
  servicesSlideTwo.classList.add('slide_hidden');
  servicesSlideThree.classList.add('slide_hidden');
}

buttonGuarantee.onclick = function() {
  servicesBlockThree.classList.remove('services_wrapper_1');
  servicesBlockThree.classList.remove('services_wrapper_3');
  servicesBlockThree.classList.add('services_wrapper_2');
  servicesSlideOne.classList.add('slide_hidden')
  servicesSlideTwo.classList.remove('slide_hidden');
  servicesSlideThree.classList.add('slide_hidden');
}

buttonCredit.onclick = function() {
  servicesBlockThree.classList.remove('services_wrapper_1');
  servicesBlockThree.classList.remove('services_wrapper_2');
  servicesBlockThree.classList.add('services_wrapper_3');
  servicesSlideOne.classList.add('slide_hidden')
  servicesSlideTwo.classList.add('slide_hidden');
  servicesSlideThree.classList.remove('slide_hidden');
}

