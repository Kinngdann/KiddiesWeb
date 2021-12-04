import React from 'react'
import axios from 'axios'
import { PaystackButton } from 'react-paystack';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../utilities/loader'
import Countdown from '../utilities/countdown'
import Modal from 'react-modal'
import avatar from './avatar.svg'
import '../styles/components/contestants/_user.scss'


class User extends React.Component {
    constructor(props){
        super()

        this.state = {
            loader: true,
            modal: false,
            id: props.match.params.id,
            contestant: {},
            picture: '',
            // allUsers: [],
            vote: '',
            amount: 0,
            newVote: '',
            position: '',
        }

        this.componentProps = {
            // email: `${this.state.id}@gmail.com`,
            email: uuidv4() + '@gmail.com',
            publicKey: 'pk_live_0a12b040cf7f4b99178257c168881b2825f4415a',
            text: 'Add votes',
            onSuccess: (reference) => this.handlePaystackSuccessAction(reference),
            onClose: this.handlePaystackCloseAction,
        }
    }



    titleCase(str) {
        return str.toLowerCase().split(' ').map((word) => {
            return (word.charAt(0).toUpperCase() + word.slice(1))
        }).join(' ')
    }


    componentDidMount(){
        this.fetchUser()
        // this.loadAllUsers()
        // this.setPosition()

        setTimeout(() => {
            this.setState({loader: false})
        }, 1000);

        // setTimeout(() => {
        //     this.setState({modal: true})
        // }, 3000);
    }


    fetchUser = () => {
        axios.get(`https://www.kiddiescrown.com/api/user/getSingleUserData/${this.state.id}`, {
        }).then(
            (response) => {
                const user = response.data.data
                this.setState(() => ({
                    contestant: user,
                    vote: user.votes.stageOne,
                    picture: user.pictures
                }))
            }
        )
    }

    // loadAllUsers = () => {
    //     axios.get('http://143.244.174.52:4000/api/user/getUserData').then(
    //         (response) => {
    //             const users = response.data.data
    //             this.setState({ allUsers: users.sort((a, b) => {
    //                 return b.votes.stageOne > a.votes.stageOne? 1 : -1
    //             })})

    //     }).catch( (error) => console.log(error))
    // }

    // setPosition = () => {
    //     const {vote, allUsers} = this.state

    //     allUsers.map((user, index) => {
    //         if (user.votes.stageOne === vote){
    //             // alert('Found Position!')
    //             this.setState({ position: index + 1})
    //         }
    //     })
    // }

    setAmount = (e) => {
        const amount = parseInt(e.target.value)
        this.setState({ amount })
    }

    handlePaystackSuccessAction = (reference) => {
        console.log(reference)
        const vote = (this.state.amount / 50) + this.state.vote
        axios.put(`https://www.kiddiescrown.com/api/user/updateUserData/${this.state.id}`, {
            'votes.stageOne': vote
        }).then(
            response => {
                this.setState({ vote })
            }
        )

        axios.put(`https://www.kiddiescrown.com/api/user/saveLogData/${this.state.id}`, {log: this.state.amount / 50} ).then(
            (response) => {
                console.log(response)
            }
        )
    }
    
    handlePaystackCloseAction = () => {
        console.log('closed')
    }

    closeModal = () => {
        this.setState({modal: false})
    }

    render() {     
        const { contestant, vote, modal } = this.state;

        return (
            <div>
                <Loader load = {this.state.loader} />
                <Modal 
                    isOpen = {modal}
                    shouldFocusAfterRender = {true}
                    preventScroll = {true}
                    contentLabel = 'Help This User'
                    closeTimeoutMS = {300}
                    className = {'ReactModal__Content'}
                    >
                    <h1> Help {contestant.name} get </h1>
                    <p> <span> {200 - this.state.vote } votes </span> to keep {contestant.sex === 'male'? 'him' : 'her'} in the contest </p>
                    <input type = 'button' value = 'Okay' onClick = {this.closeModal} className = 'btn--primary'/>
                </Modal>

                <div className = 'user__container'>
                    <div className = 'user__row1'>
                        <h2> Stage One </h2>
                        <div className = 'vote'> <h1> {vote} <span>{vote > 1? 'votes' : 'vote'} </span> </h1> </div>
                    </div>

                    <div className = 'user__row2'>
                        <div className = 'user__row2__col1'>
                            <div>
                                <h2>Hi, I'm </h2>
                                <h1> {this.titleCase(`${contestant.name}`)} </h1>
                                <h3> Contestant ID: {contestant.id} </h3>
                            </div>

                            <div className = 'quote'>
                                <h3>
                                    "{contestant.description? contestant.description : `${contestant.name} 
                                    deserves to win this contest because ${contestant.sex === 'male'? 'he' : 'she' } 
                                    is everything a mother can ever wish for.`}"
                                </h3>
                            </div>

                            <div className = 'pay'>
                                <form onSubmit = {(e) => {e.preventDefault()}}>
                                    <h3 className = 'label'> Select Votes </h3>
                                    <select onChange = {this.setAmount} required className = 'paystack--select' >
                                        <option value = '' > None </option>
                                        <option value = {500}> 10 votes </option>
                                        <option value = {1000}> 20 votes </option>
                                        <option value = {2500}> 50 votes </option>
                                        <option value = {5000}> 100 votes </option>
                                        <option value = {10000}> 200 votes </option>
                                        <option value = {25000}> 500 votes </option>
                                        <option value = {50000}> 1000 votes </option>
                                        <option value = {100000}> 2000 votes </option>
                                        <option value = {250000}> 5000 votes </option>
                                    </select>
                                    <PaystackButton 
                                        {...this.componentProps} reference = {(new Date()).getTime().toString()} 
                                        amount = {this.state.amount * 100} 
                                        className = {this.state.amount? 'btn--paystack' : 'btn--disabled'} 
                                    />

                                    {/*
                                        <div className = 'bank'>
                                        <p> Want a different payment option? That's fine! </p>
                                        <h3> Account Name: <span> Kiddies Crown </span></h3> 
                                        <h3> Account Number: <span> 0669795144 </span></h3> 
                                        <h3> Bank: <span> GTB </span></h3> 
                                        <p className = 'imp'> 
                                            After transfer/deposit, click on the whatsapp icon (buttom-right) 
                                            and forward the receipt/proof and Contestant's ID.
                                        </p>
                                    </div>
                                    */}

                                </form>
                            </div>
                        </div>

                        <div className = 'user__row2__col2'>
                            <img src = {contestant.pictures? `http://143.244.174.52:4000/${contestant.pictures}` : avatar} alt = '' width = '500'/>
                        </div>
                    </div>
                    <Countdown />
                    <div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default User
