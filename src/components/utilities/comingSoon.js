import React from 'react'
import Countdown from './countdown'
import Loader from './loader'
import '../styles/helpers/_coming_soon.scss';


class ComingSoon extends React.Component {
    constructor() {
        super()
        this.state = {
            loader: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({loader: false})
        }, 2000);
    }

    render (){
        return (
            <div>
                <Loader load = {this.state.loader} />
                <div className = 'coming-soon'>
                    <div className = 'container'>
                        <h1> Coming Soon </h1>
                    </div>
                    <Countdown />
                </div>
            </div>
            
        )
    }
}

export default ComingSoon;
