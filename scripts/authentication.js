const authentication = document.getElementById('authentication');
const authenticationModalOpen = document.querySelectorAll('.authentication__modal-open');
const authenticationModalClose = document.getElementById('authenticationModalClose');

const authenticationModalOpenChangeLogin = document.getElementById('authenticationChangeLogin');
const authenticationModalOpenChangeSignup = document.getElementById('authenticationChangeSignUp');

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

authenticationModalOpen.forEach((button) => {
    button.addEventListener('click', () => {
        authentication.classList.add('--visible');

        document.body.classList.add('--modal-open');
        document.documentElement.classList.add('--modal-open');
    });
});

authenticationModalClose.addEventListener('click', () => {
    authentication.classList.remove('--visible');

    document.body.classList.remove('--modal-open');
    document.documentElement.classList.remove('--modal-open');
});

authenticationModalOpenChangeLogin.addEventListener('click', (e) => {
    e.preventDefault();

    signupForm.classList.remove('--visible');
    loginForm.classList.add('--visible');
});

authenticationModalOpenChangeSignup.addEventListener('click', (e) => {
    e.preventDefault();

    loginForm.classList.remove('--visible');
    signupForm.classList.add('--visible');
});

const authenticationModalOpenSignUp = document.querySelector('.authentication__modal-open-signup');

authenticationModalOpenSignUp.addEventListener('click', (e) => {
    loginForm.classList.remove('--visible');
    signupForm.classList.add('--visible');

    authentication.classList.add('--visible');

    document.body.classList.add('--modal-open');
    document.documentElement.classList.add('--modal-open');
});
