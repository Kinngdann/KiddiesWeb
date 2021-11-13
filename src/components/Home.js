import Hero from './home/hero'
import Winner from './home/winner'
import Countdown from './utilities/countdown'
import Roadmap from './home/roadmap'
import Faq from './utilities/faq'
import Video from './utilities/video'
import Action from './utilities/action'
import Loader from './utilities/loader'
import React from 'react'

class Home extends React.Component {

    constructor(){
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

    render() {
        return (
            <div> 
                <Loader load = {this.state.loader} />
                <Hero />
                <Winner />
                <Video />
                <Countdown />
                <Roadmap />
                <Faq />
                <Action />
            </div>
        )
    } 
}

export default Home;
