const showcaseCarouselItem = document.querySelectorAll('.showcase__carousel-item');
const showcaseSpotlight = document.getElementById('showcaseSpotlight');
const showcaseSpotlightImage = showcaseSpotlight.querySelector('img');
const showcaseSpotlightCaption = showcaseSpotlight.querySelector('span');

showcaseCarouselItem.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        document.querySelectorAll('.showcase__carousel').forEach((c) => (c.style.animationPlayState = 'paused'));

        showcaseSpotlightImage.src = item.querySelector('img').src;
        showcaseSpotlightCaption.textContent = item.querySelector('span').textContent;
        showcaseSpotlight.classList.add('--visible');

        showcaseCarouselItem.forEach((i) => {
            if (i !== item) i.style.filter = 'brightness(0.25)';
        });
    });

    item.addEventListener('mouseleave', () => {
        document.querySelectorAll('.showcase__carousel').forEach((c) => (c.style.animationPlayState = 'running'));

        showcaseSpotlight.classList.remove('--visible');
        showcaseCarouselItem.forEach((i) => (i.style.filter = ''));
    });
});
