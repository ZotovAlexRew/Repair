export const modal = () => {
     const buttonCall = document.querySelector('.button a');
     const headerModal = document.querySelector('.header-modal');
     const overlay = document.querySelector('.overlay');
     const services = document.getElementById('services');
     const serviceModal = document.querySelector('.services-modal');
     const serviceButtons = document.querySelectorAll('.service-button a');
     const modalBlock = document.querySelector('.modals');
     const docs = document.getElementById('documents');
     const bigPhoto = docs.querySelector('.big-photo');
     const sertificates = docs.querySelectorAll('.sertificate-document');
     const documentOverlay = docs.querySelectorAll('.document-overlay');
     
   /* buttonCall.setAttribute('href', '#');
     serviceButtons.forEach(serviceButton =>  serviceButton.setAttribute('href', '#'))*/

     function changeDisplay(prop, modal) {
       modal.style.display = prop;
       overlay.style.display = prop;
    }

    buttonCall.addEventListener('click', () => {
        changeDisplay('block', headerModal); 
        return false;
    });

    services.addEventListener('click', (e) => {
         if (e.target.closest('.service-button')) 
         {
              changeDisplay('block', serviceModal);
         }
         return false;
    });

    modalBlock.addEventListener('click', (e) => {
         if (e.target.classList.contains('overlay')) 
         {
               changeDisplay('none', headerModal);
               changeDisplay('none', serviceModal); 
               changeDisplay('none', bigPhoto); 
         } 
         else if (e.target.classList.contains('header-modal__close')) 
         {
              changeDisplay('none', headerModal);
         } 
         else if (e.target.classList.contains('services-modal__close')) 
         {
            changeDisplay('none', serviceModal);
         }
    });

    docs.addEventListener('click', (e) => {
         if (e.target.closest('.sertificate-document')) 
         {
            e.preventDefault();
            changeDisplay('block', bigPhoto);  
         } 
         else if(e.target.classList.contains('close-photo')) 
         {
              changeDisplay('none', bigPhoto);  
         }
    });

    sertificates.forEach((sertificate, index) => {
         sertificate.addEventListener('mouseover', () => {
               documentOverlay[index].style.opacity = '0.9';
         });
    });

    sertificates.forEach((sertificate, index) => {
         sertificate.addEventListener('mouseout', () => {
             documentOverlay[index].style.opacity = ''; 
         });
    });
};