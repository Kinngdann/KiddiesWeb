import React from 'react';

class AddVotes extends React.Component {

    constructor(props){
        super()
        this.state = {
            id: '',
            amount: '',
            confirmation: false
        }
    }

    setID = (e) => {
        const id = e.target.value
        this.setState({ id })
    }

    setAmount = (e) => {
        const amount = e.target.value
        this.setState({ amount })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const vote = Math.floor(this.state.amount / 50)
        // API Call
    }

    render(){
        return (
            <form onSubmit = {this.onSubmit}>
                <input type = 'text' value = {this.state.id} onChange = {this.setID} placeholder = 'Enter ID' />
                <input type = 'number' value = {this.state.amount} onChange = {this.setAmount} placeholder = 'Enter Amount' />
                <input type = 'submit' value = 'ADD' onSubmit = {this.onSubmit} />
            </form>
        )
    }
}

export default AddVotes
