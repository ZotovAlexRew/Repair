export const sliders = () => {
    const services = document.getElementById('services');
    const serviceBlocks = document.querySelectorAll('.service-block');

    let width = document.documentElement.clientWidth;

    function doSlide (countOfSlides) {
        let currentSlide1 = countOfSlides - countOfSlides;
        let currentSlide2 = countOfSlides - 1;

        const activeSlides = (elements, index1, index2, strClass) => {
            elements[index1].classList.remove(strClass);
            elements[index2].classList.remove(strClass);
        };

        const noActiveSlides = (elements, index1, index2, strClass) => {
            elements[index1].classList.add(strClass);
            elements[index2].classList.add(strClass);
        };

        activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');

        services.addEventListener('click', (e) => {
            if (e.target.closest('.services__arrow--right')) 
            {
                noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');
                    currentSlide1 += countOfSlides;
                    currentSlide2 += countOfSlides;
                if (currentSlide1 >= serviceBlocks.length ||currentSlide2 >= serviceBlocks.length ) 
                {
                    currentSlide1 = countOfSlides - countOfSlides;
                    currentSlide2 = countOfSlides - 1;
                }
                activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');
            } 
            else if (e.target.closest('.services__arrow--left')) 
            {
                noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');
                    currentSlide1 -= countOfSlides;
                    currentSlide2 -= countOfSlides;
                if (currentSlide1 < 0 ||currentSlide2 < 0 ) 
                {
                    currentSlide1 = serviceBlocks.length-countOfSlides;
                    currentSlide2 = serviceBlocks.length-1;
                }
                activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');
            }
        });
    }

    width > 576 ? doSlide(2) : doSlide(1);
};