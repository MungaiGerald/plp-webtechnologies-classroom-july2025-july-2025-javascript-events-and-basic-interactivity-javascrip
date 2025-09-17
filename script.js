// Part 1 and Part 2
// Dark/Light Mode Toggle

const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // This updates the dark/light mode emoji/text
    toggleBtn.textContent = document.body.classList.contains('dark-mode')
        ? '☀️ Toggle Light Mode'
        : '🌙 Toggle Dark Mode';
});

// Click Counter Feature

let count = 0;
const counterBtn = document.getElementById("counter-btn");
const counterValue = document.getElementById("counter-value");
counterBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

// Collapsible FAQ Section

const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});


// Part 3
// Form Validation with JavaScript

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop default submission
    let isValid = true;

    // Reset messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    // Validate name
    if (nameInput.value.trim().length < 5) {
        nameError.textContent = 'Name must be at least 5 characters.';
        isValid = false;
    }

    // Validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate password
    if (passwordInput.value.length < 5) {
        passwordError.textContent = 'Password must be at least 5 characters.';
        isValid = false;
    }

    // Show success as an alert instead of writing to the page
    if (isValid) {
        alert(`Welcome, ${nameInput.value}! Your form was submitted successfully.`);
        form.reset();
    }


});