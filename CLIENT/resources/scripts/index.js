document.addEventListener('DOMContentLoaded', function() {
    wrapper.classList.add('active-popup');

});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'home.html'; 
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'home.html'; 
});
