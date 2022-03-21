export const calc = () => {
    const calcBlock = document.getElementById('calc');
    const type = document.getElementById('calc-type');
    const material = document.getElementById('calc-type-material');
    const square = document.getElementById('calc-input');
    const total = document.getElementById('calc-total');

    function countTotal() {
        if (type.options[0].selected !== true && material.options[0].selected !== true && square.value !== '') 
        {
            total.value = (+square.value * type.options[type.selectedIndex].value * material.options[material.selectedIndex].value).toFixed(1);
        } 
        else 
        {
            total.value = '0';
        }
    }

    if (calcBlock) {
        calcBlock.addEventListener('change', (e) => {
            if (e.target === type || e.target === material || e.target === square) 
            {
                countTotal();
            }
        });
    }
};