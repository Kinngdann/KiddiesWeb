import React from 'react';
import { connect } from 'react-redux';
// import { addVote } from '../../controls/redux_actions/contestant';


class ProfilePage extends React.Component {
    constructor(props){
        console.log('hbfshbsfj', props)
        super()

        this.contestant = props.contestants.find((user) => user.id === props.match.params.id)
        this.state = {
            n: ''
        }
    }

    setInit = (e) => {
        const n = e.target.value
        this.setState(() => ({n}))
    }

    handleSumbit = (e) => {
        e.preventDefault()
        // const id = this.contestant.id
        // const no = parseInt(this.state.n)
        // this.props.location.handleVotes({id, no})
        // this.props.dispatch(addVote({id, no}))
    }

    render(contestant) {     
        // const { match, location, history } = this.props;
   
        return (
            <div>
                <p> You are now at {this.contestant.name} profile page </p>
                <p> User ID is {this.contestant.id} and vote count of {this.contestant.votes.stageOne} </p>

                <form onSubmit = {this.handleSumbit}>
                    <input type = 'number' value = {this.state.n} onChange = {this.setInit} />
                    <input type = 'submit' value = 'update'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    contestants: store.contestants
})

export default connect(mapStateToProps)(ProfilePage)
