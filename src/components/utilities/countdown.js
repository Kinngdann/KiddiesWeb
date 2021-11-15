import React from 'react'
import '../styles/helpers/_countdown.scss'

class Countdown extends React.Component {
    constructor(){
        super()

        this.state = {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        }
    }

    componentDidMount(){
        this.startTimer()
    }

    startTimer = () => {
        // let interval;
        const endDate = new Date("November 19, 2021").getTime();
        let interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate - now;
            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor ( (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
            const seconds = Math.floor((distance % (60 * 1000)) / 1000)

            if (distance > 0){
                this.setState({days, hours, minutes, seconds})
            } else {
                clearInterval(interval);
            }
        })
    }

    render() {
        const { days, hours, minutes, seconds } = this.state
        return (
            <div className = 'countdown'>
                <div className = 'countdown__text'>
                    <h1> Registration Ends </h1>
                </div>

                <div className = 'countdown__time'>
                    <div className = 'countdown__time__days'>
                        <h2> {days} </h2>
                        <h3> {days < 2? 'Day' : 'Days'} </h3>
                    </div>

                    <div className = 'countdown__time__hours'>
                        <h2> {hours} </h2>
                        <h3> {hours < 2? 'Hour' : 'Hours'} </h3>
                    </div>

                    <div className = 'countdown__time__minutes'>
                        <h2> {minutes} </h2>
                        <h3> {minutes < 2? 'Minute' : 'Minutes'} </h3>
                    </div>

                    <div className = 'countdown__time__seconds'>
                        <h2> {seconds} </h2>
                        <h3> {seconds < 2? 'Second' : 'Seconds'} </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Countdown;
