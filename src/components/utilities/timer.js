import React from 'react';
// import './_profile.scss';

export default function Profile(){
    const [timer, setTimer] = React.useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    React.useEffect(() => {
        startTimer();
    }, []);
    
    function startTimer() {
        const endDate = new Date("May 16, 2022").getTime();
        let interval = setInterval(() => {
            const now = new Date().getTime();
            const timeDiff = endDate - now;
            const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
            const hours = Math.floor ( (timeDiff % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

            if (timeDiff > 0){
                setTimer({
                    ...timer,
                    days,
                    hours,
                    minutes, 
                    seconds
                })
            } else {
                clearInterval(interval);
            }
        })
    }

    const time = `${timer.days} ${timer.days > 1? 'days' : 'day'} & ${timer.hours}h:${timer.minutes}m:${timer.seconds}s`;
    
    return (
        <div className='bnxn'>
            <p className='time-left'> Time left: <span style={{fontWeight: '900'}}>{time}</span> </p>
        </div>            
    )
}
