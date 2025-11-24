// DOM
const cardContainer = document.querySelector('.card_container');
const successContainer = document.querySelector('.success_container');
const successEmail = document.querySelector('.success_email');
const dismissBtn = document.querySelector('.dismiss_btn');
const invalidText = document.querySelector('.email_invalid');
const subscribeBtn = document.getElementById('subscribe_btn');
const emailInput = document.getElementById('email');
// Email Regex to validate email
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Functions
function validateEmail(email) {
    return emailRegex.test(email);
}

function showInvalidText() {
    invalidText.classList.remove('hidden');
}

function hideInvalidText() {
    invalidText.classList.add('hidden');
}

function showMessageSection() {
   successContainer.classList.remove('hidden');
}

function hideMessageSection() {
    successContainer.classList.add('hidden');
}

function hideCardSection() {
    cardContainer.classList.add('hidden');
}

function showCardSection() {
    cardContainer.classList.remove('hidden');
}

// Event Listeners
subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
        hideCardSection();
        showMessageSection();
        successEmail.textContent = emailInput.value;
    } else {
        showInvalidText();
    }
})

dismissBtn.addEventListener('click', () => {
    hideMessageSection();
    showCardSection();

    invalidText.classList.add('hidden');
})