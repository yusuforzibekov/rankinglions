const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.navbar');
const items = document.querySelectorAll('.header-burger-items');
let open = document.querySelector('#open');
let writer = document.querySelector('#writer');


let str = writer.innerText;
writer.innerHTML = '';
let count = 0;
let timer;

function print() {
    writer.innerHTML += str.charAt(count);
    count++;
    if (str.length == count) {
        clearInterval(timer);
    }
}

timer = setInterval(print, 250);

burger.addEventListener('click', () => {
    // Toggle the 'open' class on the 'nav' element
    if (nav.id === 'open') {
        nav.id = ''; // Remove the ID
    } else {
        nav.id = 'open'; // Set the ID
    }
    items.forEach(item => item.classList.toggle('ec'));

    if (nav.id === 'open') {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = '';
    }
});