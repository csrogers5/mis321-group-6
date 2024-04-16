let myAccounts;
let myFurniture;
let myOrderForms;
const accountUrl = "http://localhost:5178/api/account"
const furnitureUrl = "http://localhost:5178/api/furniture"
const orderUrl = "http://localhost:5178/api/order"



async function getAccountData()
{
    let response = await fetch(accountUrl)
    myAccounts = await response.json()
    console.log(myAccounts) // remove later
}

async function getFurnitureData()
{
    let response = await fetch(furnitureUrl)
    myAccounts = await response.json()
    console.log(myAccounts) // remove later
}

async function getOrderData()
{
    let response = await fetch(orderUrl)
    myAccounts = await response.json()
    console.log(myAccounts) // remove later
}












// Page Routing //
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
