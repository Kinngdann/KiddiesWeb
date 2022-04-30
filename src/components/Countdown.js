import React from 'react';
import './_countdown.scss';

export default function Countdown(){
        const counter = {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        };

    const [timer, setTimer] = React.useState(counter);

    React.useEffect(() => {
        startTimer();
    }, [timer]);

    function startTimer() {
        const endDate = new Date("May 1, 2022").getTime();
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

    return (
        <div className = 'countdown'>
            <div className = 'countdown__header'>
                <h1> #KiddiesCrownContest</h1>
            </div>
            <div className = 'countdown__text'>
                <h1> STAGE 1 Starts: </h1>
            </div>

            <div className = 'countdown__time'>
                <div className = 'countdown__time__days'>
                    <h2> {timer.days} </h2>
                    <h3> {timer.days < 2? 'Day' : 'Days'} </h3>
                </div>

                <div className = 'countdown__time__hours'>
                    <h2> {timer.hours} </h2>
                    <h3> {timer.hours < 2? 'Hour' : 'Hours'} </h3>
                </div>

                <div className = 'countdown__time__minutes'>
                    <h2> {timer.minutes} </h2>
                    <h3> {timer.minutes < 2? 'Minute' : 'Minutes'} </h3>
                </div>

                <div className = 'countdown__time__seconds'>
                    <h2> {timer.seconds} </h2>
                    <h3> {timer.seconds < 2? 'Second' : 'Seconds'} </h3>
                </div>
            </div>
            <div className='countdown__comment'>
                <h3>
                    Kindly note: This portal will be opened for voting activities on Sunday, 1st May, 2022.
                </h3>
            </div>
        </div>
    )
}