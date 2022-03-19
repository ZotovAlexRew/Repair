export const modal = () => {
    const body = document.querySelector('body');
    const headerModal = body.querySelector('.header-modal');
    const overlay = body.querySelector('.overlay');
    const serviceModal = body.querySelector('.services-modal');

     function changeDisplay(prop, modal) {
       modal.style.display = prop;
       overlay.style.display = prop;
    }
  
    body.addEventListener('click', (e) => {
       if(e.target.classList.contains('header-modal__close')) {
            changeDisplay('none', headerModal);
       } else if (e.target.classList.contains('services-modal__close')) {
            changeDisplay('none', serviceModal);
       } else if (e.target.classList.contains('overlay')) {
            changeDisplay('none', headerModal);
            changeDisplay('none', serviceModal);
       }else if (e.target.closest('.button')) {
            changeDisplay('block', headerModal);
       } else if (e.target.closest('.service-button')) {
           changeDisplay('block', serviceModal);
       }
    });
};