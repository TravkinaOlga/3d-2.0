const popup = document.getElementById('popup');
const openBtn = document.getElementById('show-login');
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');
const submit = document.getElementById('submit');

form.addEventListener('submit', e => {
    e.preventDefault();
});

openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
})
window.addEventListener('click', (e) => {
    if(e.target === popup) {
        popup.style.display = 'none';
    }
})

showPassword.addEventListener("pointerdown", event => {
    password.type = "text";
});
showPassword.addEventListener("pointerup", event => {
    password.type = "password";
});



email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("It is not an email address.");
    } else if (email.validity.valueMissing) {
        email.setCustomValidity("Email address is requered.");
    } else {
        email.setCustomValidity("");
    }
});

email.onblur = function() {
    if (email.validity.valid) {
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
        showError();
    }
};   
  
function showError() {
    if (email.validity.typeMismatch) {
        errorMessage.textContent = "It is not an email address.";
    } else if (email.validity.valueMissing) {
        errorMessage.textContent = "Email address is requered.";
    }
}

submit.addEventListener('click', (e) => {
    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);
    popup.style.display = 'none';
});
