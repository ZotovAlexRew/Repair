export const sliderProfit = () => {
    const benefitsItem = Array.from(document.querySelectorAll('.benefits__item'));
    let firstGroup = benefitsItem.slice(0,3);
    let secondGroup = benefitsItem.slice(3);
    const benefitsArrows = document.querySelector('.benefits-arrows');

    let width = document.documentElement.clientWidth;
    
    secondGroup.forEach(item => item.classList.add('noActiveBenefit'));

    benefitsArrows.addEventListener('click', (e) => {
        if (e.target.closest('.benefits__arrow')) 
        {
           firstGroup.forEach(item => item.classList.toggle('noActiveBenefit'));
           secondGroup.forEach(item => item.classList.toggle('noActiveBenefit'));
        }
    });
};