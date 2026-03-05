const showcaseCarouselItem = document.querySelectorAll('.showcase__carousel-item');
const showcaseSpotlight = document.getElementById('showcaseSpotlight');
const showcaseSpotlightImage = showcaseSpotlight.querySelector('img');
const showcaseSpotlightCaption = showcaseSpotlight.querySelector('span');

let hoverTimer = null;

showcaseCarouselItem.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        hoverTimer = setTimeout(() => {
            document.querySelectorAll('.showcase__carousel').forEach((c) => (c.style.animationPlayState = 'paused'));

            showcaseSpotlightImage.src = item.querySelector('img').src;
            showcaseSpotlightCaption.textContent = item.querySelector('span').textContent;
            showcaseSpotlight.classList.add('--visible');

            showcaseCarouselItem.forEach((i) => {
                if (i !== item) i.style.filter = 'brightness(0.25)';
            });
        }, 250); // 0.25s delay
    });

    item.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);

        document.querySelectorAll('.showcase__carousel').forEach((c) => (c.style.animationPlayState = 'running'));

        showcaseSpotlight.classList.remove('--visible');
        showcaseCarouselItem.forEach((i) => (i.style.filter = ''));
    });
});
