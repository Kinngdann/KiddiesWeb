import React from 'react'
import axios from 'axios'
import Loader from '../utilities/loader'


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
        this.loadAllUsers()

        setTimeout(() => {
            this.setState({loader: false})
            // this.setTopContestants()
        }, 2000)

    }

    loadAllUsers = () => {
        axios.get('https://www.kiddiescrown.com/api/user/getUserData')
        .then((response) => {
            const contestants = response.data.data
            this.setState({sorted: this.sort(contestants)})
        })
        .catch( (error) => {
            console.log(error);
        })

        this.setTopContestants()
    }

    sort = (contestants) => {
        return contestants.sort((a, b) => {
            return b.votes.stageOne > a.votes.stageOne? 1 : -1
        })
    }

    setTopContestants = () => {
        let topContestants = []
        
        for (let i = 0; i < 6; i++){
            topContestants.push(this.state.sorted[i])
        }

        this.setState({topContestants})
    }

    showContestants = () => {
        return (
            <div>
                {this.state.topContestants.map((contestant, index) => {
                    return (
                        <div key = {index}>
                            <h3> {contestant.name} </h3>
                        </div>
                    )
                })}
            </div>
        )
    }

    render(){
        return (
            <div>
                <Loader load = {this.state.loader} />
                <this.showContestants/>
            </div>
        )
    }
}

export default EliteBoard
