import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardNum = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K",];
const cardPalo = [0, 1, 2, 3,];

window.onload = function() {
  //write your code here
  let numResult = Math.floor(Math.random() * cardNum.length);
  let paloResult = Math.floor(Math.random() * cardPalo.length);
  let centerIcon = 0;
  if (paloResult === 0) {
    paloResult = `<div style="color: #ff0000;">${cardNum[numResult]} <i class="fa-solid fa-heart"></i></div>`
    centerIcon = `<i class="fa-solid fa-heart" style="color: #ff0000;"></i></div>`
  } else if (paloResult === 1) {
    paloResult = `<div style="color: #ff0000;">${cardNum[numResult]} <i class="fa-solid fa-diamond"></i></div>`
    centerIcon = `<i class="fa-solid fa-diamond" style="color: #ff0000;"></i>`
  } else if (paloResult === 2) {
    paloResult = `${cardNum[numResult]} <i class="fa-solid fa-caret-up"></i>`
    centerIcon = `<i class="fa-solid fa-caret-up"></i>`
  } else {
    paloResult = `${cardNum[numResult]} <i class="fa-solid fa-clover"></i>`
    centerIcon = `<i class="fa-solid fa-clover"></i>`
  }
  console.log(cardNum[numResult]);
  document.getElementById("card-left").innerHTML = `${paloResult}`;
  document.getElementById("card-right").innerHTML = `${paloResult}`;
  document.getElementById("card-center").innerHTML = `${centerIcon}`;
};
