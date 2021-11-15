import React from 'react'
import Loader from './utilities/loader'
import Policy from './privacy/policy'
import Action from './utilities/action'

class Privacy extends React.Component {

    constructor(){
        super()
        this.state = {
            loader: true
        }
    }

    componentDidMount (){
        setTimeout(() => {
            this.setState({loader: false})
        })
    }

    render(){
        return (
            <div>
                <Loader load = {this.state.loader} />
                <Policy />
                <Action />
            </div>
        )
    }
}

export default Privacy
