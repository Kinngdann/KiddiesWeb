import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import '../styles/components/register/_regModal.scss';

const RegModal = ({active, data, rmvModal, comment}) => {

    Modal.setAppElement('#root')

    return (
        <div>
            <Modal
                isOpen = {active}
                shouldFocusAfterRender = {true}
                preventScroll = {true}
                contentLabel = 'Registration status'
                closeTimeoutMS = {300}
                className = {'ReactModal__Content'}
            >
                <h3> Registration Status </h3>
                <p> {comment} </p>
                {data.id && <h2> ID: {data.id} </h2>}
                {data.id && <p>The above ID is associated with {data.name}'s account kindly note it.</p>}
                <Link
                    to = '/'> 
                        <input 
                            type = 'button' 
                            value = 'Okay' 
                            onClick = {rmvModal}
                            className = 'btn--primary'
                        /> 
                </Link>
            </Modal>
        </div>
    )
}

export default RegModal
