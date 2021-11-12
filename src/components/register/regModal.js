import React from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import '../styles/components/register/_regModal.scss'

class RegModal extends React.Component {

    constructor(props){
        console.log('see here', props)
        super()
        this.state = {
            active: props.active,
        }
    }

    toggle = () => this.setState({active: false})

    render(){
        return (
            <div>
                <Modal 
                    isOpen = {this.state.active}
                    shouldFocusAfterRender = {true}
                    shouldCloseOnEsc = {true}
                    preventScroll = {true}
                    className = {'ReactModal__Content'}
                >
                    <h1> TITLE </h1>
                    <h1> TITLE </h1>
                    <h1> TITLE </h1>
                    <h1> TITLE </h1>
                    <h1> TITLE </h1>
                    <h1> TITLE </h1>
                    <h1> TITLE </h1>
                    <p> Your registration is successful </p>
                    <Link to = './'> <input type = 'button' value = 'Great!' onClick = {this.toggle} className = 'btn--primary'/> </Link>
                </Modal>
            </div>
        )
    }
}

export default RegModal
