const authentication = document.getElementById('authentication');
const authenticationModalOpen = document.querySelectorAll('.authentication__modal-open');
const authenticationModalClose = document.getElementById('authenticationModalClose');

const authenticationModalOpenChangeLogin = document.getElementById('authenticationChangeLogin');
const authenticationModalOpenChangeSignup = document.getElementById('authenticationChangeSignUp');
const authenticationChangeForgot = document.querySelector('#loginForm a');
const authenticationChangeLoginFromForgot = document.getElementById('authenticationChangeLoginFromForgot');

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const forgotForm = document.getElementById('forgotForm');

const authenticationForm = document.querySelector('.authentication__modal-form');

/* ---------------- PANEL RESET ---------------- */

function resetFormPanel(panel) {
    const inputs = panel.querySelectorAll('input');

    inputs.forEach((input) => {
        input.value = '';
    });

    const passwordFields = panel.querySelectorAll('.component__textfield.--password');

    passwordFields.forEach((field) => {
        const input = field.querySelector('input');
        const icon = field.querySelector('.component__textfield-visibility use');

        input.type = 'password';

        if (icon) {
            icon.setAttribute('href', './assets/icons/icons.svg#visibility-off');
        }
    });
}

/* ---------------- PANEL SWITCHING ---------------- */

function showLogin() {
    resetFormPanel(signupForm);
    resetFormPanel(forgotForm);

    loginForm.classList.add('--visible');
    signupForm.classList.remove('--visible');
    forgotForm.classList.remove('--visible');
}

function showSignup() {
    resetFormPanel(loginForm);
    resetFormPanel(forgotForm);

    signupForm.classList.add('--visible');
    loginForm.classList.remove('--visible');
    forgotForm.classList.remove('--visible');
}

function showForgot() {
    resetFormPanel(loginForm);
    resetFormPanel(signupForm);

    forgotForm.classList.add('--visible');
    loginForm.classList.remove('--visible');
    signupForm.classList.remove('--visible');
}

/* ---------------- MODAL OPEN ---------------- */

authenticationModalOpen.forEach((button) => {
    button.addEventListener('click', () => {
        showLogin();

        authentication.classList.add('--visible');

        document.body.classList.add('--modal-open');
        document.documentElement.classList.add('--modal-open');
    });
});

/* ---------------- MODAL CLOSE ---------------- */

authenticationModalClose.addEventListener('click', () => {
    authentication.classList.remove('--visible');

    document.body.classList.remove('--modal-open');
    document.documentElement.classList.remove('--modal-open');

    resetAuthenticationForms();
    showLogin();
});

/* ---------------- FORM NAVIGATION ---------------- */

authenticationModalOpenChangeLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

authenticationModalOpenChangeSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showSignup();
});

authenticationChangeForgot.addEventListener('click', (e) => {
    e.preventDefault();
    showForgot();
});

authenticationChangeLoginFromForgot.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

/* ---------------- OPEN MODAL DIRECTLY TO SIGNUP ---------------- */

const authenticationModalOpenSignUp = document.querySelector('.authentication__modal-open-signup');

authenticationModalOpenSignUp.addEventListener('click', () => {
    showSignup();

    authentication.classList.add('--visible');

    document.body.classList.add('--modal-open');
    document.documentElement.classList.add('--modal-open');
});

/* ---------------- PASSWORD VISIBILITY ---------------- */

const passwordFields = document.querySelectorAll('.component__textfield.--password');

passwordFields.forEach((field) => {
    const input = field.querySelector('input');
    const toggle = field.querySelector('.component__textfield-visibility');
    const icon = toggle.querySelector('use');

    toggle.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            icon.setAttribute('href', './assets/icons/icons.svg#visibility');
        } else {
            input.type = 'password';
            icon.setAttribute('href', './assets/icons/icons.svg#visibility-off');
        }
    });
});

/* ---------------- MODAL RESET ---------------- */

function resetAuthenticationForms() {
    authenticationForm.reset();

    document.querySelectorAll('.component__textfield.--password').forEach((field) => {
        const input = field.querySelector('input');
        const icon = field.querySelector('.component__textfield-visibility use');

        input.type = 'password';

        if (icon) {
            icon.setAttribute('href', './assets/icons/icons.svg#visibility-off');
        }
    });
}

/* ---------------- BUTTON REFERENCES ---------------- */

const loginButton = loginForm.querySelector('button');
const signupButton = signupForm.querySelector('button');
const forgotButton = forgotForm.querySelector('button');

/* ---------------- SIGNUP ---------------- */

/* ---------------- SIGNUP ---------------- */
signupButton.addEventListener('click', (e) => {
    const email = signupForm.querySelector('input[name="email"]');
    const username = signupForm.querySelector('input[name="username"]');
    const password = signupForm.querySelector('input[name="password"]');
    const confirmPassword = signupForm.querySelector('input[name="confirmPassword"]');

    // 1. Check if HTML5 requirements are met (required, email format, etc.)
    if (!email.reportValidity() || !username.reportValidity() || !password.reportValidity() || !confirmPassword.reportValidity()) {
        return;
    }

    e.preventDefault();

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match.');
        return;
    }

    const user = { email: email.value, username: username.value, password: password.value };
    localStorage.setItem('ijeepneyUser', JSON.stringify(user));
    alert('Account created successfully!');
    showLogin();
});

/* ---------------- LOGIN ---------------- */
loginButton.addEventListener('click', (e) => {
    const usernameInput = loginForm.querySelector('input[name="username"]');
    const passwordInput = loginForm.querySelector('input[name="password"]');

    // 1. Trigger the browser's built-in validation bubbles
    if (!usernameInput.reportValidity() || !passwordInput.reportValidity()) {
        return;
    }

    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const storedUser = JSON.parse(localStorage.getItem('ijeepneyUser'));

    if (!storedUser) {
        alert('No account found. Please sign up first.');
        return;
    }

    if (username === storedUser.username && password === storedUser.password) {
        alert('Login successful!');
        authentication.classList.remove('--visible');
        document.body.classList.remove('--modal-open');
        document.documentElement.classList.remove('--modal-open');
        resetAuthenticationForms();
    } else {
        alert('Invalid username or password.');
    }
});

/* ---------------- FORGOT PASSWORD ---------------- */
forgotButton.addEventListener('click', (e) => {
    const emailInput = forgotForm.querySelector('input[name="email"]');

    if (!emailInput.reportValidity()) {
        return;
    }

    e.preventDefault();

    const email = emailInput.value;
    const storedUser = JSON.parse(localStorage.getItem('ijeepneyUser'));

    if (!storedUser || email !== storedUser.email) {
        alert('Email not found.');
        return;
    }

    alert('Password reset instructions sent to ' + email);
    showLogin();
});
