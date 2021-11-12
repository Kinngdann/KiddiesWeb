import React from 'react'
import AllContestants from './contestants/allContestants'
import Loader from './utilities/loader'

class Contestants extends React.Component {
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
    
    render(){
        return (
            <div>
                <Loader load = {this.state.loader} />
                <AllContestants />
            </div>
        )
    }
}

export default Contestants;
