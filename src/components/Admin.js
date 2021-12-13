import React from 'react';
import './styles/components/admin/_admin.scss'
import AddVotes from './admin/addVotes'
import ChangeImage from './admin/changeImage'
import RollOver from './admin/rollOver'

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
                    <ChangeImage />
                    <RollOver />
                </div>
            </div>
        )
    }
}

export default Admin
