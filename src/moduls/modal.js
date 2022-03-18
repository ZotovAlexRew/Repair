export const modal = () => {
    const callBtn = document.querySelector('.button');
    const headerModal = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const close = headerModal.querySelector('.header-modal__close');

     function changeDisplay(prop) {
       headerModal.style.display = prop;
       overlay.style.display = prop;
    }
  
    callBtn.addEventListener('click', () => {
        changeDisplay('block');
    });

   close.addEventListener('click', () => {
        changeDisplay('none');  
   });
};