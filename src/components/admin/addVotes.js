import React from 'react';
import axios from 'axios'
import Modal from 'react-modal'


class AddVotes extends React.Component {

    constructor(props){
        super()
        this.state = {
            contestant: {},
            oldVote: '',
            id: '',
            vote: '',
            confirmation: false,
            modal: false
        }
    }

    setID = (e) => {
        const id = e.target.value
        this.setState({ id })
    }

    setVote = (e) => {
        const vote = e.target.value
        this.setState({ vote })
    }

    // AddVoteProceed = () => {
    //     this.setState({confirmation: true, modal: false})
    // }

    // AddVoteReject = () => {
    //     this.setState({confirmation: false, modal: false})
    // }

    onSubmit = (e) => {
        e.preventDefault()

        axios.get(`https://www.kiddiescrown.com/api/user/getSingleUserData/${this.state.id}`, {
        }).then(
            (response) => {
                const contestant = response.data.data
                this.setState(() => ({
                    contestant,
                    oldVote: contestant.votes.stageOne,
                }))

                // console.log('old', this.state.oldVote)
            }
        )

        if (this.state.id && this.state.vote){

            // const foo = this.state.oldVote + this.state.vote
            console.log('old', this.state.oldVote)
            console.log('new', this.state.vote)
            console.log('total', this.state.oldVote + this.state.vote)

            // axios.put(`https://www.kiddiescrown.com/api/user/updateUserData/${this.state.id}`, {
            //     'votes.stageOne': foo
            // }).then(
            //     response => {
            //         console.log(response)
            //     }
            // )
    
            // axios.put(`https://www.kiddiescrown.com/api/user/saveLogData/${this.state.id}`, {log: foo} ).then(
            //     (response) => {
            //         console.log(response)
            //     }
            // )

            alert('success')
            this.setState({id: '', amount: ''})
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
            </div>
        )
    }
}

export default AddVotes
