import { Formik } from 'formik';
import React from 'react';
import axios from 'axios';
// import Textfield from '../utilities/formFields/textfield';
import '../styles/components/register/_pre-register.scss';

const PreRegister = () => {
    const [success, setSuccess] = React.useState(false);

    const onSubmit = async () => {
        const payload = {
            name: 'Kingsley',
        }

        try {
            const response = await axios.post('', payload)
            if(response.status === 200){
                setSuccess(true);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='pre-register'>
            <div>
                <h3>Registration Form</h3>
                <Formik
                    initialValues={{
                        name: '',
                        phone1: '',
                        phone2: '' 
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
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
                            />
                            
                            <input
                            type="text"
                            name="phone1"
                            onChange={formikProps.handleChange}
                            onBlur={formikProps.handleBlur}
                            value={formikProps.values.phone1}
                            placeholder='Phone number'
                            />
                            
                            <input
                            type="text"
                            name="phone2"
                            onChange={formikProps.handleChange}
                            onBlur={formikProps.handleBlur}
                            value={formikProps.values.phone2}
                            placeholder='Whatsapp number'
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
