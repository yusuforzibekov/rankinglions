const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    // Toggle the 'open' class on the 'nav' element
    if (nav.id === 'open') {
        nav.id = ''; // Remove the ID
    } else {
        nav.id = 'open'; // Set the ID
    }
});