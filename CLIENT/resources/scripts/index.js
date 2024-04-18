let myAccounts;
const accountUrl = "http://localhost:5178/api/account"
const furnitureUrl = "http://localhost:5178/api/furniture"
const orderUrl = "http://localhost:5178/api/order"

async function handleOnLoad()
{
    getAccountData()
}

async function getAccountData()
{
    let response = await fetch(accountUrl)
    myAccounts = await response.json()
    console.log(myAccounts) // remove later
}

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
    let access = checkAccount()
    console.log(access)
    if (access === true)
    {
        localStorage.setItem('email', document.getElementById('email').value)
        window.location.href = 'home.html'; 
    }
    else
    {
        console.log("Email and Password do not match")
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    postAccount().then(function() {
        console.log('postAccount executed');
        window.location.href = 'home.html';
    }).catch(function(error) {
        console.error('Error in postAccount:', error);
    });
});

function checkAccount() {
    return myAccounts.some(account =>
        account.email === document.getElementById('email').value &&
        account.password === document.getElementById('password').value
    );
}

function postAccount() {
    return new Promise(function(resolve, reject) {
        fetch(accountUrl, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById('rusername').value, 
                email: document.getElementById('remail').value,
                password: document.getElementById('rpassword').value,
                admin: false
            })
        })
        .then(response => {
            if (response.ok) {
                console.log("Account Post success");
                localStorage.setItem('email', document.getElementById('remail').value);
                resolve(); // Resolve the promise if the request was successful
            } else {
                reject('Failed to post account'); // Reject the promise if the request failed
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reject(error); // Reject the promise if there was an error
        });
    });
}


