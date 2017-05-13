var callback = function(){
let dQuery = (s) => document.querySelector(s);

const secondHand = dQuery('#second-hand');
const minHand = dQuery('#min-hand');
const hourHand = dQuery('#hour-hand');

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function setDate() {
  const now = new Date;

  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  dQuery('#second').innerText = `${addZero(seconds)}`;

  const mins = now.getMinutes();
  const minsDegree = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;
  dQuery('#min').innerText = `${addZero(mins)}`;

  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  dQuery('#hour').innerText = `${addZero(hour)}`;
}

setInterval(setDate, 1000);
};

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    callback();
  }
}
