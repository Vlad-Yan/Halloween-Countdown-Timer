window.addEventListener('DOMContentLoaded', function() {
    
    const deadline = '2022-10-31 00:00:00';
    
    function getTimeRemaining(deadline) {
        let remainingTime = Date.parse(deadline) - Date.parse(new Date()),
            days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
            hours = Math.floor(remainingTime / (1000 * 60 * 60) % 24),
            minutes = Math.floor(remainingTime / (1000 * 60) % 60),
            seconds = Math.floor(remainingTime / 1000 % 60);

        return {
            'total': remainingTime,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }


    function declOfNum(number, titles) {  
        const cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    
    function addZero(num) {
        if (num >= 0 && num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(deadline) {
        const daysValue = document.querySelector('.countdown-timer__days .countdown-timer__value'),
              hoursValue = document.querySelector('.countdown-timer__hours .countdown-timer__value'),
              minutesValue = document.querySelector('.countdown-timer__minutes .countdown-timer__value'),
              secondsValue = document.querySelector('.countdown-timer__seconds .countdown-timer__value'),
              daysText = document.querySelector('.countdown-timer__days .countdown-timer__text'),
              hoursText = document.querySelector('.countdown-timer__hours .countdown-timer__text'),
              minutesText = document.querySelector('.countdown-timer__minutes .countdown-timer__text'),
              secondsText = document.querySelector('.countdown-timer__seconds .countdown-timer__text'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const remainingTime = getTimeRemaining(deadline);

            daysValue.innerHTML = addZero(remainingTime.days);
            hoursValue.innerHTML = addZero(remainingTime.hours);
            minutesValue.innerHTML = addZero(remainingTime.minutes);
            secondsValue.innerHTML = addZero(remainingTime.seconds);    
            daysText.innerHTML = declOfNum(remainingTime.days, ['день', 'дня', 'дней']);    
            hoursText.innerHTML = declOfNum(remainingTime.hours, ['час', 'часа', 'часов']);    
            minutesText.innerHTML = declOfNum(remainingTime.minutes, ['день', 'минуты', 'минут']);    
            secondsText.innerHTML = declOfNum(remainingTime.seconds, ['секунда', 'секунды', 'секунд']);  

            
            if (remainingTime.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    
    }

    setClock(deadline);

});