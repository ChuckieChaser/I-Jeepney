const authentication = document.getElementById('authentication');
const authenticationModalOpen = document.querySelectorAll('.authentication__modal-open');
const authenticationModalClose = document.getElementById('authenticationModalClose');

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
