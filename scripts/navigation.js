const navigationMenu = document.getElementById('navigationMenu');
const navigationMenuOpen = document.getElementById('navigationMenuOpen');
const navigationMenuClose = document.getElementById('navigationMenuClose');

const menuNavigations = document.querySelectorAll('.menu__navigations a');

navigationMenuOpen.addEventListener('click', () => {
    navigationMenu.classList.add('--visible');

    document.body.classList.add('--modal-open');
    document.documentElement.classList.add('--modal-open');
});

navigationMenuClose.addEventListener('click', () => {
    navigationMenu.classList.remove('--visible');

    document.body.classList.remove('--modal-open');
    document.documentElement.classList.remove('--modal-open');
});

menuNavigations.forEach((navigation) => {
    navigation.addEventListener('click', () => {
        navigationMenu.classList.remove('--visible');

        document.body.classList.remove('--modal-open');
        document.documentElement.classList.remove('--modal-open');
    });
});
