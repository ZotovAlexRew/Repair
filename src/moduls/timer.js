export const timer = (date) => {
    const daysSpan = document.querySelectorAll('.count_1 span');
    const hoursSpan = document.querySelectorAll('.count_2 span');
    const minutesSpan = document.querySelectorAll('.count_3 span');
    const secondsSpan = document.querySelectorAll('.count_4 span');

    const getRemaining = () => {
        let dateStop = new Date(date).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) %24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

         if (timeRemaining < 0) {
            timeRemaining = 0;
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
        
        return {timeRemaining, days, hours, minutes, seconds}
    };

    const updateClock = () => {
        let getTime = getRemaining();
        
        daysSpan.forEach(daySpan => {
            getTime.days < 10 ? daySpan.textContent = '0' + getTime.days : daySpan.textContent = getTime.days;
        });
        hoursSpan.forEach(hourSpan => {
            getTime.hours < 10 ? hourSpan.textContent = '0' + getTime.hours : hourSpan.textContent = getTime.hours;
        });
        minutesSpan.forEach(minuteSpan => {
            getTime.minutes < 10 ?  minuteSpan.textContent = '0' + getTime.minutes : minuteSpan.textContent = getTime.minutes;
        });
        secondsSpan.forEach(secondSpan => {
            getTime.seconds < 10 ? secondSpan.textContent = '0' + getTime.seconds : secondSpan.textContent = getTime.seconds;
        });
    };

    const interval = () => {
        let intervalId;
        let getTime = getRemaining();
        updateClock();
        if(getTime.timeRemaining > 0) {
            intervalId = setInterval(updateClock, 1000);
        } else {
            clearInterval(intervalId);
        }
    };
    interval();
};