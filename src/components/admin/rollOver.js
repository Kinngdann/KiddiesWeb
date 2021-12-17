import React from 'react'
import axios from 'axios'


class RollOver extends React.Component {
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


    rollOver = (e) => {
        e.preventDefault()
        const {contestants} = this.state
        const vote = 300

        for(let i = 0; i < contestants.length; i++){
            if (contestants[i].votes.stageTwo > vote){



                // const remainder = contestants[i].votes.stageTwo - vote

                // try {
                //     axios.put(`https://www.kiddiescrown.com/api/user/updateUserData/${contestants[i].id}`, {
                //         'votes.stageThree': remainder
                //     }).then(
                //         response => {
                //             console.log(response)
                //         }
                //     )

                //     axios.put(`https://www.kiddiescrown.com/api/user/updateUserData/${contestants[i].id}`, {
                //         'votes.stageTwo': vote
                //     }).then(
                //         response => {
                //             console.log(response)
                //         }
                //     )
        
                //     console.log(contestants[i].id)
    
                // } catch (error) {
                //     console.log(error)
                // }


            }
        }
    }




    render(){
        return (
            <div>
                <input type = 'button' value = 'Roll Over' onClick = {this.rollOver} />
            </div>
        )
    }
}

export default RollOver
