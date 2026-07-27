const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

function calculateRR(){

let entry = Number(document.getElementById("entry").value);

let stoploss = Number(document.getElementById("stoploss").value);

let target = Number(document.getElementById("target").value");


if(!entry || !stoploss || !target){

alert("Please enter all values");

return;

}


let risk = Math.abs(entry - stoploss);

let reward = Math.abs(target - entry);

let ratio = reward / risk;


document.getElementById("risk").innerHTML = risk.toFixed(2);

document.getElementById("reward").innerHTML = reward.toFixed(2);

document.getElementById("ratio").innerHTML = "1 : " + ratio.toFixed(2);

}
