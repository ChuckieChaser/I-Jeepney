const rouletteTrack = document.getElementById('rouletteTrack');
const paginationDots = document.querySelectorAll('.pagination__dot');
const trackPages = document.querySelectorAll('.track__page');

let currentPage = 0;

const goToTrackPage = (pageIndex) => {
    if (pageIndex < 0) pageIndex = 0;
    if (pageIndex >= trackPages.length) pageIndex = 0;

    const pageStyle = getComputedStyle(trackPages[0]);
    const pageGap = parseInt(pageStyle.marginRight || 0);
    const pageWidth = trackPages[0].offsetWidth + pageGap;

    rouletteTrack.style.transform = `translateX(-${pageIndex * pageWidth}px)`;
    rouletteTrack.style.transition = 'transform 0.4s ease';

    paginationDots.forEach((dot) => dot.classList.remove('--active'));
    if (paginationDots[pageIndex]) paginationDots[pageIndex].classList.add('--active');

    currentPage = pageIndex;
};

paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToTrackPage(index));
});

goToTrackPage(0);

setInterval(() => {
    goToTrackPage(currentPage + 1);
}, 5000);
