import React from 'react'
import Hero from './home/hero'
import Winner from './home/winner'
import Top5 from './home/top5'
import Countdown from './utilities/countdown'
import Roadmap from './home/roadmap'
import Faq from './utilities/faq'
import Video from './utilities/video'
import Action from './utilities/action'
import Loader from './utilities/loader'

const accordionData = [
    {
        title: 'What is this Contest About?',
        content: `The contest is designed on centered around love, the love a mother shares with her Child
        is second to none. We created this platform to help Parents prove to the world how much they love their child and how
        far they're willing to go for them. This contest also help showcase the great qualities of a child`
    },
    {
        title: 'What are the requirement(s) to register my Child?',
        content: `Your Child must be in the range of 0 - 10 years old. Please see our Terms & Condition for more information.`
    },
    {
        title: 'Why do I pay to vote?',
        content: `As part of  our program to help feed homeless children, a percentage of what
        you pay for vote goes a long way in giving a better life to poor homeless Children.`
    },
    {
        title: 'How do I register?',
        content: `Kindly navigate to "Register" fill out the information correctly, a follow up call will be made to you by 
        your Child's Account Manager, briefing you about the competition.`
    }
]

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
                <Top5 />
                <Video />
                <Countdown />
                <Roadmap />
                <Faq accordionData = {accordionData} />
                <Action />
            </div>
        )
    } 
}

export default Home;
