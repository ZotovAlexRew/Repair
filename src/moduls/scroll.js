export const scrol = () => {
    const arrowImg = document.querySelector('.smooth-scroll img');
    arrowImg.hidden = true;

    arrowImg.addEventListener('click', () => {
        window.scrollTo(pageXOffset, 0);
    });

    window.addEventListener('scroll', function() {
      arrowImg.hidden = (pageYOffset < document.documentElement.clientHeight);
    });
};