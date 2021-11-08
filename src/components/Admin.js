import React from 'react';
import {Link} from 'react-router-dom'

class Admin extends React.Component {

    constructor(props){
        super()

    }

    render(){
        return (
            <div>
                <h3> What would you like to do? </h3>

                <div>
                    <Link to = {`admin/addvotes`}> ADD VOTES </Link>
                </div>
            </div>
        )
    }
}

export default Admin
