'use strict';

let coins = 0;
let coinsCounter = document.getElementById('coinsCounter');
let coinsPerClick = 1;

function addCoin(event) {
    let variable = coinsPerClick;
    document.querySelector('.p2').innerHTML = variable;
    coins = coins + coinsPerClick;
    coinsCounter.innerHTML = coins;

    let coinAnimation = document.createElement('div');
    coinAnimation.innerHTML = '+' + coinsPerClick;
    coinAnimation.className = "coinAnimation";
    coinAnimation.style.left = event.pageX - 25 + "px";
    coinAnimation.style.top = event.pageY - 25 + "px";
    document.getElementById('game').appendChild(coinAnimation);
}

let variableValueElement = document.getElementById("variabl");
variableValueElement.addEventListener("click", function() {
    if (coinsCounter.innerHTML >= 10){
        coinsCounter.innerHTML = parseInt(coinsCounter.innerHTML) - 10;
        coinsPerClick++;
        localStorage.setItem("coinsPerClick", coinsPerClick); // сохраняем значение в localStorage
        document.querySelector('.p2').innerHTML = coinsPerClick;
        coins = coins - 10; // обновляем значение переменной coins
    }
})

const openPopupBtn = document.getElementById('open-popup-btn');
const popup = document.getElementById('popup');

openPopupBtn.addEventListener('click', () => {
  popup.classList.remove('popup-closed');
  popup.classList.add('popup-open');
});

popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.classList.remove('popup-open');
    popup.classList.add('popup-closed');
  }
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('.popup-open')) {
    popup.classList.remove('popup-open');
    popup.classList.add('popup-closed');
  }
});





