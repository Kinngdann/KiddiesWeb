import React from 'react'
import axios from 'axios'
import { PaystackButton } from 'react-paystack';
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom'
import Loader from '../utilities/loader'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Video from '../utilities/video'
import Faq from '../utilities/faq'
import Modal from 'react-modal'
import avatar from './images/avatar.svg'
import '../styles/components/contestants/_user.scss'
import ScrollToTop from 'react-scroll-to-top'
import goldTick from './images/goldTick.svg'
import blueTick from './images/blueTick.svg'
import grayTick from './images/grayTick.svg'


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
            loader: true,
            modal: false,
            id: props.match.params.id,
            contestant: {},
            sorted: [],
            contestants: [],
            picture: '',
            vote: '',
            amount: 0,
            newVote: '',
            position: '',
            comment: ''
        }

        this.componentProps = {
            // email: this.state.id + uuidv4() + '@gmail.com',
            email: `${this.state.id}${uuidv4()}@gmail.com`,
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
        window.scrollTo(0, 0)
        this.fetchUser()
        this.loadAllUsers()

        setTimeout(() => {
            this.setState({loader: false})
        }, 1000);

        setTimeout(() => {
            if (parseInt(this.state.vote) < 200) {
                this.setState({modal: true})
            }
        }, 5000)        
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

    loadAllUsers = () => {
        axios.get('https://www.kiddiescrown.com/api/user/getUserData')
        .then((response) => {
            const contestants = response.data.data  
            this.setState({sorted: this.sort(contestants)})
            this.setPosition()
            // this.state.sorted.map((i, j) => {
            //     console.log('name:', i.name, 'vote:', i.votes.stageOne, 'position:', this.nth(j + 1), 'id:', i.id)
            // })
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    sort = (contestants) => {
        return contestants.sort((a, b) => {
            return b.votes.stageOne > a.votes.stageOne? 1 : -1
        })
    }

    setPosition = () => {
        this.state.sorted.map((user, index) => {
            if (user.votes.stageOne === this.state.vote){
                this.setState({  position: index + 1 })
                if (index !== 0){
                    let offset = this.state.sorted[index - 1].votes.stageOne
                    this.setState({comment: `Tip: You need a minimum of ${(offset + 1) - this.state.vote} vote(s) to claim the ${this.nth(this.state.position - 1)} position.`})
                } else {
                    this.setState({comment: 'Well done! You are leading.'})
                }
            }
            return user 
        })
    }

    nth(n){
        return[`${n}st`, `${n}nd`, `${n}rd`][ ((n+90) % 100-10) % 10-1]||`${n}th`
    }

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
                window.scrollTo(0, 0)
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
        alert('comment')
    }

    closeModal = () => {
        this.setState({modal: false})
    }

    tick = (vote) => {
        if(vote > 499 ){
            return goldTick
        } else if (vote > 199 ) {
            return blueTick
        } else if (vote > 0 && vote < 200) {
            return grayTick
        }
    }

    render() {     
        const { contestant, vote, modal } = this.state;

        return (
            <div>
                <ScrollToTop smooth />
                <Loader load = {this.state.loader} />
                <Modal 
                    isOpen = {modal}
                    shouldFocusAfterRender = {true}
                    preventScroll = {true}
                    contentLabel = 'Help This User'
                    closeTimeoutMS = {300}
                    className = {'ReactModal__Content'}
                    >
                    <h1> Help {contestant.name} </h1>
                    <h2>get a minimum of <span> {200 - this.state.vote } votes </span> to keep {contestant.sex === 'male'? 'him' : 'her'} in the contest </h2>
                    <input type = 'button' value = 'Okay' onClick = {this.closeModal} className = 'btn--primary'/>
                </Modal>

                <div className = 'user__container'>
                    <div className = 'user__row1'>
                        <h2> Stage One </h2>
                        <div className = 'vote'> <h1> {vote} <span>{vote > 1? 'votes' : 'vote'} </span> </h1> </div>
                        {this.state.position < 71 && <h3 className = 'position'> Position: {this.nth(this.state.position)} </h3>}
                        {this.state.position < 71 && <h3 className = 'comment'> {this.state.comment} </h3>}
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

                                    
                                    <div className = 'program'>
                                        <h3> 
                                            <span>Note: </span>you pay to vote as part of our program to help feed thousands
                                            of homeless children this year. <Link to = '/about'> learn more </Link>
                                        </h3>
                                    </div>
                                </form>

                                <div className = 'bank'>
                                    <p> Want a different payment option? That's fine! </p>
                                    <h4> Account Name: <span> Kiddies Crown </span></h4> 
                                    <h4> Account Number: <span> 0669795144 </span></h4> 
                                    <h4> Bank: <span> GTB </span></h4> 
                                    <h4 className = 'imp'> 
                                        After transfer/deposit to the our GTB account, click on the whatsapp icon (buttom-left) 
                                        and forward the receipt, Contestant's name and ID for verification and vote update.
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {vote > 0 && <img src = {this.tick(vote)} alt = 'tick' width = '70' className = 'tick'/>}
                        <div className = 'user__row2__col2'>
                            <LazyLoadImage
                                alt = 'contestant'
                                src = { contestant.pictures? `http://143.244.174.52:4000/${contestant.pictures}` : avatar}
                                width = '500'
                                effect = 'Black and white'
                            />
                        </div>
                    </div>
                    <div> 
                        {/*<Countdown />*/}
                        <Faq accordionData = {accordionData} />
                        <Video />
                    </div>
                </div>
            </div>
        )
    }
}

export default User
