import React from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import '../styles/components/register/_regModal.scss'

const RegModal = (props) => {

    Modal.setAppElement('#root')

    return (
        <div>
            <Modal 
                isOpen = {props.active}
                shouldFocusAfterRender = {true}
                preventScroll = {true}
                contentLabel = 'Registration status'
                className = {'ReactModal__Content'}
            >
                <h1> TITLE </h1>
                <h1> TITLE </h1>
                <h1> TITLE </h1>
                <h1> TITLE </h1>
                <h1> Registration Status </h1>
                <p> {props.message} </p>
                {props.id && <h3> ID: {props.id} </h3>}
                <Link to = '/'> <input type = 'button' value = 'Okay' onClick = {props.rmvModal} className = 'btn--primary'/> </Link>
            </Modal>
        </div>
    )
}

export default RegModal
