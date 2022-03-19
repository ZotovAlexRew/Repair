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
        
        return {timeRemaining, days, hours, minutes, seconds};
    };

    const addZero = (time, spans) => {
        spans.forEach(span => {
            time < 10 ? span.textContent = '0' + time : span.textContent = time;
        });
    };

    const updateClock = () => {
        let getTime = getRemaining();
        
        addZero(getTime.days, daysSpan);
        addZero(getTime.hours, hoursSpan);
        addZero(getTime.minutes, minutesSpan);
        addZero(getTime.seconds, secondsSpan);
    };

    const interval = () => {
        let intervalId;
        let getTime = getRemaining();
        
        updateClock();

        if(getTime.timeRemaining > 0) 
        {
            intervalId = setInterval(updateClock, 1000);
        } 
        else 
        {
            clearInterval(intervalId);
        }
    };
    interval();
};