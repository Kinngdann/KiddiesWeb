import React from 'react';
import axios from 'axios'
import Modal from 'react-modal'


class AddVotes extends React.Component {

    constructor(props){
        super()
        this.state = {
            contestant: {},
            id: '',
            vote: '',
            newVote: '',
            modal: false
        }
    }

    setID = (e) => {
        const id = e.target.value
        this.setState({id})

        try {
            axios.get(`https://www.kiddiescrown.com/api/user/getSingleUserData/${id}`, {
            }).then(
                (response) => {
                    const contestant = response.data.data
                    this.setState(() => ({
                        contestant,
                        vote: contestant.votes.stageOne,
                        id: contestant.id
                    }))
                }
            )

        } catch (error) {
            console.log(error)
        }
    }

    setVote = (e) => {
        const newVote = e.target.value
        this.setState({ newVote: parseInt(newVote) })
    }

    // AddVoteProceed = () => {
    //     this.setState({confirmation: true, modal: false})
    // }

    // AddVoteReject = () => {
    //     this.setState({confirmation: false, modal: false})
    // }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.id && this.state.vote){

            // const foo = this.state.oldVote + this.state.vote
            console.log('vote', this.state.vote)
            console.log('new', this.state.newVote)
            console.log('total', this.state.vote + this.state.newVote)

            const total = this.state.vote + this.state.newVote 

            try {
                axios.put(`https://www.kiddiescrown.com/api/user/updateUserData/${this.state.id}`, {
                    'votes.stageOne': total
                }).then(
                    response => {
                        console.log(response)
                    }
                )

                axios.put(`https://www.kiddiescrown.com/api/user/saveLogData/${this.state.id}`, {log: this.state.newVote} ).then(
                    (response) => {
                        console.log(response)
                    }
                )
    
                alert('success')
                this.setState({id: '', amount: ''})

            } catch (error) {
                console.log(error)
            }

        } else {
            alert('ERROR!!')
        }


    }

    render(){
        return (
            <div>
                <Modal 
                    isOpen = {this.state.modal}
                    shouldFocusAfterRender = {true}
                    preventScroll = {true}
                    contentLabel = 'Help This User'
                    className = {'ReactModal__Content'}
                    >

                    <input type = 'button' value = 'cancel' onClick = {this.AddVoteReject} className = 'btn--secondary'/>
                    <input type = 'button' value = 'Proceed' onClick = {this.AddVoteProceed} className = 'btn--primary'/>
                </Modal>

                <form onSubmit = {this.onSubmit}>
                    <input type = 'text' value = {this.state.id} onChange = {this.setID} placeholder = 'ID' />
                    <input type = 'number' value = {this.state.amount} onChange = {this.setVote} placeholder = 'Vote' />
                    <input type = 'submit' value = 'ADD' onSubmit = {this.onSubmit} />
                </form>
                {this.state.contestant.name && <h3> Name: {this.state.contestant.name} vote: {this.state.vote} </h3>}
                {}
            </div>
        )
    }
}

export default AddVotes
