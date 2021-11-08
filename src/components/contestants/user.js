import React from 'react';
import axios from 'axios';
import pic from './beautiful.jpeg';

class User extends React.Component {
    constructor(props){
        super()

        this.state = {
            id: props.match.params.id,
            contestant: {},
            vote: '',
            newVotes: '',
            picture: '',

            allUsers: [],
            position: ''
        }
    }

    // arrayBufferToBase64 = (buffer) => {
    //     let binary = '';
    //     const bytes = [].slice.call(new Uint8Array(buffer));
    //     bytes.forEach((b) => binary += String.fromCharCode(b));
    //     return window.btoa(binary);
    // };

    componentDidMount(){
        this.fetchUser()
        this.loadAllUsers()
    }

    fetchUser = () => {
        axios.get(`http://143.244.174.52:4000/api/user/getSingleUserData/${this.state.id}`, {
        }).then(
            (response) => {
                const user = response.data.data

                // const base64Flag = 'data:image/jpeg;base64,';
                // const imageStr = this.arrayBufferToBase64(response.data.data.pictures);
                // this.setState({contestant: user, vote: user.votes.stageOne, img: base64Flag + imageStr})

                this.setState(() => ({
                    contestant: user,
                    vote: user.votes.stageOne,
                    picture: user.pictures
                }))

                console.log(this.state.picture)
            }
        )
    }

    setVote = (e) => {
        const newVotes = parseInt(e.target.value)
        this.setState({ newVotes })
    }   

    onSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://143.244.174.52:4000/api/user/updateUserData/${this.state.id}`, {
            'votes.stageOne': this.state.vote + this.state.newVotes
        }).then(
            response => {console.log(response)
                this.setState({vote: this.state.vote + this.state.newVotes })
            }
        )
    }

    loadAllUsers = () => {
        axios.get('http://143.244.174.52:4000/api/user/getUserData').then(
            (response) => {
                const users = response.data.data
                this.setState({ allUsers: users.sort((a, b) => {
                    return b.votes.stageOne > a.votes.stageOne? 1 : -1;
                })})

        }).catch( (error) => console.log(error) )
    }

    setPosition = () => {
        const {vote, allUsers} = this.state

        allUsers.map((user, index) => {
            if (vote === user.votes.stageOne){
                console.log('Found!')
                this.setState({ position: index + 1})
            }
        })
    }

    render() {     
        const { contestant, vote, position } = this.state;

        return (
            <div>
                <img src = {pic} alt = '' width = '100'/>
                <h3> {contestant.name} </h3>
                <blockquote> {contestant.description} </blockquote>
                <h4> Number of votes: {vote} </h4>   
                 
                <form onSubmit = {this.onSubmit}>
                    <input type = 'number' value = {this.state.newVotes} onChange = {this.setVote} />
                    <input type = 'submit' value = 'Add Votes' />
                </form>
            </div>
        )
    }
}

export default User
