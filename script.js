// script.js
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const confirmPassInput = document.getElementById('confirm-password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passError = document.getElementById('password-error');
const confirmPassError = document.getElementById('confirm-password-error');

// Validation functions
function validateName() {
  if (nameInput.value.trim().length < 3) {
    showError(nameInput, nameError, 'Name must be at least 3 characters');
    return false;
  }
  showSuccess(nameInput, nameError);
  return true;
}

function validateEmail() {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!pattern.test(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Enter a valid email');
    return false;
  }
  showSuccess(emailInput, emailError);
  return true;
}

function validatePassword() {
  if (passInput.value.length < 6) {
    showError(passInput, passError, 'Password must be at least 6 characters');
    return false;
  }
  showSuccess(passInput, passError);
  return true;
}

function validateConfirmPassword() {
  if (confirmPassInput.value !== passInput.value) {
    showError(confirmPassInput, confirmPassError, 'Passwords do not match');
    return false;
  }
  showSuccess(confirmPassInput, confirmPassError);
  return true;
}

// Helper functions
function showError(input, errorEl, msg) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  errorEl.textContent = msg;
}

function showSuccess(input, errorEl) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorEl.textContent = '';
}

// Real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passInput.addEventListener('input', validatePassword);
confirmPassInput.addEventListener('input', validateConfirmPassword);

// Prevent form submit if any field is invalid
form.addEventListener('submit', (e) => {
  const validName = validateName();
  const validEmail = validateEmail();
  const validPass = validatePassword();
  const validConfirm = validateConfirmPassword();

  if (!(validName && validEmail && validPass && validConfirm)) {
    e.preventDefault();
  } else {
    alert('Registration successful!');
  }
});