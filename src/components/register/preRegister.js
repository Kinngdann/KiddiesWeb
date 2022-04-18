import { Formik } from 'formik';
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import '../styles/components/register/_pre-register.scss';

const PreRegister = () => {
    const [modal, setModal] = React.useState(false);

    const onSubmit = async (values) => {
        try {
            const response = await axios.post(
                'https://kiddiescrown.com/api/user/pre-register',
                // 'http://localhost:4000/api/user/pre-register',
                values
            )
            console.log(response);
            setModal(true)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='pre-register'>
            <div>
                <Modal
                    isOpen = {modal}
                    shouldFocusAfterRender = {true}
                    preventScroll = {true}
                    contentLabel = 'Registration status'
                    className = {'ReactModal__Content'}
                >
                    <h1> Success! </h1>
                    <p> You'll be contacted within 24hrs </p>
                    <Link 
                        to = '/'> 
                            <input 
                                type = 'button' 
                                value = 'Okay'
                                onClick = {()=> {
                                    setModal(false);
                                }} 
                                className = 'btn--primary'
                            /> 
                    </Link>
                </Modal>
                <h3>Registration Form</h3>
                <Formik
                    initialValues={{
                        name: '',
                        phone1: '',
                        phone2: '' 
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        onSubmit(values);
                    }}
                >
                    {(formikProps) => (
                        <form onSubmit={formikProps.handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                onChange={formikProps.handleChange}
                                onBlur={formikProps.handleBlur}
                                value={formikProps.values.name}
                                placeholder='Your name'
                                required
                            />
                            
                            <input
                                type="text"
                                name="phone1"
                                onChange={formikProps.handleChange}
                                onBlur={formikProps.handleBlur}
                                value={formikProps.values.phone1}
                                placeholder='Phone number'
                                required
                            />
                            
                            <input
                                type="text"
                                name="phone2"
                                onChange={formikProps.handleChange}
                                onBlur={formikProps.handleBlur}
                                value={formikProps.values.phone2}
                                placeholder='Whatsapp number'
                                required
                            />
                            
                            <input type='submit' value='SUBMIT' disabled={formikProps.isSubmitting}/>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
    
export default PreRegister;


