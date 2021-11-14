import React from 'react';
import './styles/components/admin/_admin.scss'
import {Link} from 'react-router-dom'
// import {Router, Route} from 'react-router-dom'
// import AddVotes from './admin/addVotes'
// import GetUserData from './admin/getUsersData'


class Admin extends React.Component {

    constructor(props){
        super()

    }

    render(){
        return (
            <div className = 'admin'>
                <h1> Admin Panel </h1>
                <div className = 'admin__container'>
                    <div> <Link to = '/addvote'> <h3> Add Vote </h3> </Link></div>
                    <div> <Link to = '/getdata'> <h3> Get User Data </h3> </Link></div>
                    <div> <Link to = '/getlog'> <h3> Get User Log </h3> </Link></div>
                </div>
            </div>
        )
    }
}

export default Admin

// <Route exact path = '/admin/:addvote' component = {AddVotes} />

// <Router>
// <Route exact path = '/admin/:addvote' render = {(props) => <AddVotes {...props} />} />
// </Router>
// <Route {...props} render = {(props) => isAuthenticated ? <Component {...props} /> : <Redirect to = '/signin' />} />
