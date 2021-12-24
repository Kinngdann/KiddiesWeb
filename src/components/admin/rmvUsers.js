import React from 'react'
import axios from 'axios'


class RmvUsers extends React.Component {
    constructor(){
        super()
        this.state = {
            contestants: []
        }
    }

    componentDidMount(){
        this.fetchUser()
    }

    fetchUser = () => {
        axios.get('https://www.kiddiescrown.com/api/user/getUserData')
        .then((response) => {
            const contestants = response.data.data  
            this.setState(() => ({
                contestants
            }))
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    // setID = (e) => {
    //     const id = e.target.value
    //     this.setState({id})
    //     try {
    //         axios.get(`https://www.kiddiescrown.com/api/user/getSingleUserData/${id}`, {
    //         }).then(
    //             (response) => {
    //                 const contestant = response.data.data
    //                 this.setState(() => ({
    //                     contestant,
    //                     vote: contestant.votes.stageOne,
    //                 }))
    //             }
    //         )

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    delUsers = (e) => {
        e.preventDefault()
        const {contestants} = this.state

        for(let i = 0; i < contestants.length; i++){
            if (contestants[i].votes.stageThree < 2360){

                try {
                    axios.delete(`https://www.kiddiescrown.com/api/user/deleteSingleUserData/${contestants[i].id}`, {
                    }).then(
                        (response) => {
                            console.log(response)
                            console.log(contestants[i].name, 'deleted')
                        }
                    )

                } catch (error) {
                    console.log(error)
                }
            }
        }
    }




    render(){
        return (
            <div>
                <input type = 'button' value = 'delete < 300' onClick = {this.delUsers} />
            </div>
        )
    }
}

export default RmvUsers
