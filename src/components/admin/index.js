import EditProfile from './editProfile';
import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


class Admin extends React.Component {

    constructor(props){
        super()

        this.url = props.location.pathname
        this.state = {
            id: ''
        }

        // this.user = props.contestants.find((contestant) => contestant.id === this.state.id)
        // console.log('current user', this.user)
    }

    setID = (e) => {
        const id = e.target.value
        this.setState({ id })
    }

    render(){
        return (
            <div>
                <h3> What would you like to do? </h3>
                <input type = 'text' value = {this.state.id} onChange = {this.setID} />
                <Link to = {`${this.url}/edit/${this.state.id}`} > Edit Contestant's Page </Link>
            </div>
        )
    }
}

export default Admin

// <li> 
// <EditProfile /> 
// <input type = 'text' value = {id} onChange = {} />
// </li>