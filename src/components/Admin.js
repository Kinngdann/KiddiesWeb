import React from 'react';
// import './styles/components/admin/_admin.scss'
import AddVotes from './admin/addVotes'

class Admin extends React.Component {

    constructor(props){
        super()

    }

    render(){
        return (
            <div className = 'admin'>
                <h1> Admin Panel </h1>
                <div className = 'admin__container'>
                    <AddVotes />     
                    {/*
                    <div> <Link to = '/admin/addvote'> <h3> Add Vote </h3> </Link></div>
                    <div> <Link to = '/admin/getlog'> <h3> Get User Log </h3> </Link></div>
                    <div> <Link to = '/admin/rmvusers'> <h3> Delete User(s) </h3> </Link></div>
                    */}
                </div>
            </div>
        )
    }
}

export default Admin
