const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function timer(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDegree = ((hour / 12) * 360) + 90;
    const minuteDegree = ((minute / 60) * 360) + 90;
    const secondDegree = ((second/60) * 360);

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`; 
}

setInterval(timer,1000)