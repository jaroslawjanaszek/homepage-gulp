"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

console.log('siema');
const name = 'Maciek';
const age = 17;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);


if ('javascript' != 'java') {
  console.log(`to prawda!`)
}
if (age < 20) {
  console.log('masz mniej niż 20 lat');
} else if (age >= 20 && age <= 30) {
  console.log('masz więcej niż 20 lat ale mniej niż 30');
} else {
  console.log('jesteś 31+');
}

switch (age) {
  case 20:
    console.log('masz 20 lat');
    break;
  case 30:
    console.log('masz 30 lat');
    break;
  default:
    console.log(`masz ${age} lat`);
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
  x = x + 3;
  console.log(`trafycyjnie ${x}`);
  return x * 7;
}

console.log(calculate(2));

const calculateFat = x => (x + 3) * 7;
console.log(calculateFat(2));



const welcome = (namee, agee) => {
  console.log(`Witaj ${namee}, masz ${agee} lat.`)
}

welcome("Jarek", 26);

const button = document.querySelector('.header__button--js');
console.log(button);


const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  navigationList.classList.toggle('navigation__list--visible');
});