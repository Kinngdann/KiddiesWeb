import React from 'react';
import axios from 'axios';

class AddVotes extends React.Component {

    constructor(props){
        super()
        this.state = {
            id: '',
            amount: '',
            disabled: false
        }
    }

    setID = (e) => {
        const id = e.target.value;
        console.log(typeof(id))
        this.setState({id})
    }

    setAmount = (e) => {
        const amount = parseInt(e.target.value);
        console.log(typeof(amount))
        this.setState({ amount})
    }

    onSubmit = async(e) => {
        e.preventDefault();
        this.setState({disabled: true});

        const {id, amount} = this.state;
        if (id && amount ){
            try {
                const {status} = await axios.post(`https://kiddiescrown.com/api/user/updateVote/${id}`, {
                    voteCount: Math.floor(amount/50),
                    method: 'admin'
                });
                if (status === 200){
                    alert('SUCCESS');
                    this.setState({disabled: false});
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            console.log('ERROR!!')
        }
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input type = 'text' value = {this.state.id} onChange = {this.setID} placeholder = 'ID' />
                    <input type = 'number' value = {this.state.amount} onChange = {this.setAmount} placeholder = 'AMOUNT' />
                    <input type = 'submit' value = 'UPDATE' onSubmit = {this.onSubmit} disabled={this.state.disabled}/>
                </form>
            </div>
        )
    }
}

export default AddVotes
