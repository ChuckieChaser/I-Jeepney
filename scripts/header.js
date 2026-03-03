const header = document.getElementById('header');
const hero = document.getElementById('hero');

const observer = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) header.classList.remove('--solid');
        else header.classList.add('--solid');
    },
    {
        root: null,
        threshold: 0.1,
    }
);

observer.observe(hero);
