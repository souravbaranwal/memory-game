const parentBox = document.querySelector('#boxParent');
const box = document.querySelectorAll('.box');
const boxData = [];
const parentBoxData = [];

let gameBoxData = [
	  `<div class="box"><i class="fab fa-500px"></i></div>`,
      `<div class="box"><i class="fas fa-bomb"></i></div>`,
      `<div class="box"><i class="fas fa-cannabis"></i></div>`,
      `<div class="box"><i class="fab fa-android"></i></div>`,
      `<div class="box"><i class="fab fa-earlybirds"></i></div>`,
      `<div class="box"><i class="fas fa-cannabis"></i></div>`,
      `<div class="box"><i class="fas fa-headphones"></i></div>`,
      `<div class="box"><i class="fab fa-500px"></i></div>`,
      `<div class="box"><i class="fab fa-earlybirds"></i></div>`,
      `<div class="box"><i class="fas fa-bomb"></i></div>`,
      `<div class="box"><i class="fas fa-kiss-wink-heart"></i></div>`,
      `<div class="box"><i class="fab fa-android"></i></div>`,
      `<div class="box"><i class="fas fa-chess-king"></i></div>`,
      `<div class="box"><i class="fas fa-kiss-wink-heart"></i></div>`,
      `<div class="box"><i class="fas fa-chess-king"></i></div>`,
      `<div class="box"><i class="fas fa-headphones"></i></div>`
];

let gameDataBoxParent = document.querySelector('#boxParent');

gameDataBoxParent.innerHTML = gameBoxData.sort(elm => 0.5 - Math.random()).join('');
console.log(gameDataBoxParent.innerHTML);
let count = 0;

function displayBox(event) {
	let target = event.target;
	console.log(target);
	console.log('target elem ', target);
	let targetIconClass = event.target.childNodes[0].classList.value;
	target.classList.add('unhide');
	
	parentBoxData.push(target);
	boxData.push(targetIconClass);
	count = count + 1;
	console.log(count);

	if(count == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
	}

	
	
	let hideBox = () => {if(boxData.length == 2) {
		(boxData[0] !== boxData[1]) ? parentBoxData.forEach(element => element.classList.remove('unhide')) : '';
		boxData.splice(0, boxData.length);
		parentBoxData.splice(0, parentBoxData.length);

		let movesCounter = document.querySelector('#movesCounter');
		movesCounter.textContent = `moves: ${count/2}`;
	}};
	setTimeout(hideBox, 1300);
}
// timer function
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector("#timeCounterBox");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}


parentBox.addEventListener('click', displayBox);