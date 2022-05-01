import React from 'react';
import { PaystackButton } from 'react-paystack';
import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class PaymentAuth extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            vote: null,
            amount: null,
            id: props.id
        }

        this.setAmount = this.setAmount.bind(this);
    }
    
    paystackProps = {
        email: `${this.props.id}-${uuidv4()}@gmail.com`,
        publicKey: 'pk_live_0a12b040cf7f4b99178257c168881b2825f4415a',
        // publicKey: 'pk_test_5e3696a3645df2464029ea462a20dd5a2e7a2a22',
        text: 'Add votes',
        onSuccess: (reference) => this.handlePaystackSuccessAction(reference),
        onClose: this.handlePaystackCloseAction,
    }
    
    handlePaystackSuccessAction(reference){
        console.log(reference)
        this.updateVote();
    }
    
    async updateVote(){
        try {
            const response = await axios.post(`https://kiddiescrown.com/api/user/updateVote/${this.state.id}`, {
                voteCount: this.state.amount / 50,
                method: 'paystack'
            })
            console.log(response);
            window.location.reload();
        } catch (error) {
            // console.log(error)
            alert(error);
        }
    }
    
    handlePaystackCloseAction(){
        console.log('Error occurred');
    }

    setAmount(e){
        let amount = e.target.value;
        this.setState({amount});
    }

    render(){
        return (
            <div>
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
                    </select>
                    <PaystackButton
                        {...this.paystackProps} reference = {(new Date()).getTime().toString()}
                        amount = {this.state.amount * 100}
                        className = {this.state.amount? 'btn--paystack' : 'btn--disabled'}
                    />
                    <div className = 'program'>
                        <h3> 
                            <span>Note: </span>you pay to vote as part of our program to help feed 
                            homeless children this year. <Link to = '/about'> learn more </Link>
                        </h3>
                    </div>
                </form>
            </div>
        )
    }
}

export default PaymentAuth;
