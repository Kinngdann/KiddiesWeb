import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
// import {Link} from 'react-router-dom'
import Loader from '../utilities/loader'
import Video from '../utilities/video'
import Faq from '../utilities/faq'
import Modal from 'react-modal'
import '../styles/components/contestants/_user.scss';
import ScrollToTop from 'react-scroll-to-top'
import PaymentAuth from './paymentAuth';
import Button from '@mui/material/Button';

const accordionData = [
    {
        title: 'What is the Kiddies Crown Contest About?',
        content: `The contest is designed and centered around parental love and love for humanity. The love a mother shares with her Child
        is second to none. This contest was created to help Parents prove to the world how much they love their child and how
        far they're willing to go for them. This contest also help showcase the great qualities of a child`
    },
    {
        title: 'Why do I pay to vote?',
        content: `You pay to vote as part of  our program to help feed homeless children this year, a percentage of what
        you pay for votes goes a long way in giving a better life to poor homeless Children.`
    },
    {
        title: 'What are the Prizes for Winners?',
        content: `The Winner of the contest get a whopping sum of N500,000 in cash, will be crowned Mr/Miss Crown 2021/2022, iPad, and lots 
        of gifts and other benefits which equates N700,000 in worth`
    }
]

class User extends React.Component {
    constructor(props){
        super()

        this.state = {
            user: {
                id: '',
                name: '',
                description: '',
                picture: '',
                gender: '',
                votes: {
                    stage1: ''
                },
            },
            position: {
                index: null,
                nextScore: null
            },
            loader: true,
            // modal: false,
            id: props.match.params.id,
            showModal: false
        }

        this.componentProps = {
            email: `${this.state.id}${uuidv4()}@gmail.com`,
            publicKey: 'pk_live_0a12b040cf7f4b99178257c168881b2825f4415a',
            text: 'Add votes',
            onSuccess: (reference) => this.handlePaystackSuccessAction(reference),
            onClose: this.handlePaystackCloseAction,
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.fetchUser();
    }

    async fetchUser(){
        const { data } = await axios.get(`https//kiddiescrown.com/api/user/getUser/${this.state.id}`);
        this.setState({...data})
        console.log(data);
        
        if(data.user.votes.stage1 < 200){
            setTimeout(() => {
                this.setState({showModal: true})
            }, 5000);
        }

        this.setState({loader: false});
    }

    nth(n){
        return[`${n}st`, `${n}nd`, `${n}rd`][ ((n+90) % 100-10) % 10-1]||`${n}th`
    }
    
    getComment(index, nextScore){
        const comment = {
            leading: `Congratulations! You're currently leading.`,
            other: `You need a minimum of ${nextScore===0? 10 : nextScore+5} to claim the ${this.nth(index-1)} position`
        }
        return index > 1? comment.other : comment.leading;
    }

    closeModal = () => {
        this.setState({showModal: false})
    }

    titleCase(str) {
        return str.toLowerCase().split(' ').map((word) => {
            return (word.charAt(0).toUpperCase() + word.slice(1))
        }).join(' ')
    }

    render() {
        const { user, position, loader, showModal } = this.state;
        return (
            <div>
                <ScrollToTop smooth />
                <Loader load = {loader} />
                <Modal
                    isOpen = {showModal}
                    shouldFocusAfterRender = {true}
                    preventScroll = {true}
                    contentLabel = 'Help This Contestant'
                    closeTimeoutMS = {300}
                    className = {'ReactModal__Content'}
                >
                    <h1> Help {user.name} </h1>
                    <h2> get atleast {200-user.votes.stage1} votes to help {user.gender === 'male'? 'him' : 'her'} remain in the Contest.</h2>
                    <input type = 'button' value = 'Okay' onClick = {this.closeModal} className = 'btn--primary'/>
                </Modal>
        
                <div className = 'user__container'>
                    <div className = 'user__row1'>
                        <h2> Stage 1 </h2>
                        <div className = 'vote'> <h1> {user.votes.stage1} <span> {user.votes.stage1 > 1? 'votes' : 'vote'} </span> </h1> </div>
                        <h3 className = 'position'> Position: {this.nth(position.index)} </h3>
                        <h3 className = 'comment'> {this.getComment(position.index, position.nextScore)} </h3>
                    </div>
                
                    <div className = 'user__row2'>
                        <div className = 'user__row2__col1'>
                            <div>
                                <h2>Hi, I'm </h2>
                                <h1> {this.titleCase(`${user.name}`)} </h1>
                                <h3> Contestant ID: {user.id} </h3>
                            </div>
                
                            <div className = 'quote'>
                                <h3>
                                    "{user.description? user.description : `${user.name} 
                                    deserves to win this contest because ${user.gender === 'male'? 'he' : 'she' } 
                                    is everything a parent can ever wish for.`}"
                                </h3>
                            </div>
                            
                            <div className = 'pay'>
                                <PaymentAuth id={this.state.id}/>
                                <div className = 'bank'>
                                    <p> Want a fund transfer payment option? </p>
                                    <h4> Account Name: <span> Kiddies Crown </span></h4> 
                                    <h4> Account Number: <span> 0669795144 </span></h4> 
                                    <h4> Bank: <span> GTB </span></h4> 
                                    <Button variant="outlined" href="https://wa.me/message/WPNWKSRUU2FCG1"> WhatsApp </Button>

                                    <h4 className = 'imp'> 
                                        After transfer/deposit to the our GTB account, click on the whatsapp icon below
                                        and forward the receipt, Contestant's name and ID for confirmation and vote update.
                                    </h4>
                                </div>
                            </div>
                        
                        </div>
                        <div className = 'user__row2__col2'>
                            <img 
                                alt=''
                                src={`https://kiddiescrown.com/${user.picture}`}
                                width = '500'
                            />
                        </div>
                    </div>
                    <div>
                        <Faq accordionData = {accordionData} />
                        <Video />
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
