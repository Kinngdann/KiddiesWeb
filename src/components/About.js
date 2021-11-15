import React from 'react'
import Brief from './about/brief'
import Video from './utilities/video'
import Countdown from './utilities/countdown'
import Action from './utilities/action'
import Loader from '../components/utilities/loader'

class About extends React.Component {

    constructor(){
        super()
        this.state = {
            loader: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({loader: false})
        }, 2000)
    }

    render(){
        return (
            <div> 
                <Loader load = {this.state.loader} />
                <Brief />
                <Video />
                <Countdown />
                <Action />
            </div>
        )
    }
}

export default About;
