import React from 'react'
import axios from 'axios'
import Loader from '../utilities/loader'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../styles/components/elites/_eliteboard.scss'

class EliteBoard extends React.Component {

    constructor(){
        super()
        this.state = {
            loader: true,
            sorted: [],
            topContestants: []
        }
    }

    componentDidMount() {
        this.getUsers()
    }


    getUsers = async () => {

        try {
            let response = await axios.get('https://www.kiddiescrown.com/api/user/getUserData')
            const contestants = response.data.data

            this.setState({
                sorted: this.sort(contestants),
                loader: false
            })
            this.setTopContestants()

        } catch (error) {
            console.log(error)
        }

    }

    sort = (contestants) => {
        return contestants.sort((a, b) => {
            return b.votes.stageThree > a.votes.stageThree? 1 : -1
        })
    }

    setTopContestants = () => {
        this.setState({topContestants: this.state.sorted.slice(0, 6)})
    }

    nth(n){
        return[`${n}st`, `${n}nd`, `${n}rd`][ ((n+90) % 100-10) % 10-1]||`${n}th`
    }

    titleCase(str) {
        return str.toLowerCase().split(' ').map((word) => {
            return (word.charAt(0).toUpperCase() + word.slice(1))
        }).join(' ')
    }

    showContestants = () => {
        const {topContestants} = this.state

        return (
            <div board className = 'board'>
                {topContestants.map((contestant, index) => {
                    return (
                        <div key = {index} className = 'item'>
                            <div className = 'img'>
                                <div className = 'img__rounded'>
                                    <LazyLoadImage
                                        alt = 'contestant'
                                        src = {`http://143.244.174.52:4000/${contestant.pictures}`}
                                        width = '200'
                                        effect = 'Black and white'
                                    />
                                </div>
                            </div>
                            <div className = 'info'>
                                <div className = 'info__name'>
                                    <h2> {this.titleCase(contestant.name)} </h2>
                                </div>
                                <div className = 'info__others'> 
                                    <div className = 'position'> 
                                        <h2> Position: </h2>
                                        <h4> ({index === 0? 'Leading Contestant' : this.nth(index) + ' Runner-up'}) </h4>
                                    </div>
                                    <div className = {index === 0? 'index_first' : 'index_others'}>
                                        <h3> {this.nth(index + 1)} </h3> 
                                    </div>
                                </div>
                            </div>
                            <div className = 'view'>
                                <div> 
                                    <Link to = {`contestant/${contestant.id}`}> <h3> VIEW </h3> </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    intro = () => {
        return (
            <div className = 'intro'>
                <div className = 'intro__text'>
                    <h1> Meet Our Leading Contestants </h1>
                    <h3> The enlisted Contestants are currently our best performing contestants </h3>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div>
                <Loader load = {this.state.loader} />
                <this.intro />
                <this.showContestants/>
            </div>
        )
    }
}

export default EliteBoard
