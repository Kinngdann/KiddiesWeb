import React from 'react';
import Loader from '../utilities/loader'
import axios from 'axios'
import RegModal from './regModal'
import '../styles/components/register/_register.scss'

class FormRegister extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            regUsers: '',
            userLimit: 999,
            modal: false,
            loader: true,
            name: '',
            age: '',
            sex: '',
            location: '',
            description: '',
            tel: '',
            parentName: '',
            deserveCrown: '',
            isWhatsapp: false,
            whatsapp: '',
            email: '',
            relationship: '',
            tc: false,
            file: null,
            imagePath: '',
            message: ''
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loader: false})
        }, 2000)

        axios.get('https://www.kiddiescrown.com/api/user/getUserData')
        .then((response) => {
            const users = response.data.data
            this.setState({regUsers: users.length})
        })
        .catch( (error) =>  {
            console.log(error);
        })
    }

    setName = (e) => {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    setAge = (e) => {
        const age = e.target.value
        this.setState(() => ({ age }))
    }

    setSex = (e) => {
        const sex = e.target.value
        this.setState(() => ({ sex }))
    }

    setLocation = (e) => {
        const location = e.target.value
        this.setState(() => ({ location }))
    }

    setDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    setParentName = (e) => {
        const parentName = e.target.value
        this.setState(() => ({ parentName }))
    }

    setTel = (e) => {
        const tel = e.target.value
        this.setState(() => ({ tel }))
    }

    setDeserveCrown = (e) => {
        const deserveCrown = e.target.value
        this.setState(() => ({ deserveCrown }))
    }

    isWhatsapp = () => {
        this.setState(() => ({isWhatsapp: !this.state.isWhatsapp}))
    }

    setWhatsapp = (e) => {
        const whatsapp = e.target.value
        this.setState(() => ({ whatsapp }))
    }

    setEmail = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    setRelationship = (e) => {
        const relationship = e.target.value
        this.setState(() => ({ relationship }))
    }

    isTC = () => {
        this.setState(() => ({ tc: !this.state.tc}))
    }

    isPrivacy = () => {
        this.setState(() => ({ privacy: !this.state.privacy}))
        console.log(this.state.privacy)
    }

    setImage = (e) => {
        const file = e.target.files[0]
        const imagePath = URL.createObjectURL(file)
        this.setState(() => ({ file, imagePath }))
    }

    rmvModal = () => {
        this.setState({modal: false})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({loader: true})

        const check = localStorage.getItem('isRegistered')
        if (check) {
            this.setState({loader: false, message: 'We\'re sorry, you can only register one contestant/family', modal: true})
        } else {
            const userData = {
                name: this.state.name,
                age: this.state.age,
                sex: this.state.sex,
                location: this.state.location,
                description: this.state.description,
                tel: this.state.tel,
                whatsapp: this.state.whatsapp || this.state.tel,
                parentName: this.state.parentName,
                email: this.state.email,
                relationship: this.state.relationship,
                votes: {
                    stageOne: 0,
                    stageTwo: 0,
                    stageThree: 0
                }
            }
    
            const formData = new FormData()
            formData.append(
                'user', JSON.stringify(userData)
            )
    
            if (this.state.file){
                const file = this.state.file
                formData.append(
                    'image',
                    file,
                    'pic'
                )
            }
            
            axios.post('https://www.kiddiescrown.com/api/user/saveUserData', formData).then(
                (response) => {
                    console.log(response)
                    if (response.request.status === 200){
                        localStorage.setItem('isRegistered', 'true')
                        this.setState(() => ({
                            id: response.data.data.id,
                            loader: false, 
                            message: 'Your registration was successful!',
                            modal: true,
                        }))
                    } else {
                        this.setState({loader: false})
                    }
                }
            )
        }
    }


    render(){
        return(
            <div className = 'form-div'>
                <RegModal active = {this.state.modal} id = {this.state.id} rmvModal = {this.rmvModal} message = {this.state.message} />
                <Loader load = {this.state.loader} />
                <form onSubmit = {this.onSubmit} className = 'register'>
                    <section className = 'contestant'>
                        <h2> Child's Information </h2>
                        <label> Name
                            <input type = 'text' value = {this.state.name} onChange = {this.setName} placeholder = "Child's Name" required/> 
                        </label>
                        <label> Age
                            <select onChange = {this.setAge} required >
                                <option value = '' > None </option>
                                <option value = '0' > Less than 1 year old </option>
                                <option value = '1' > 1 year old </option>
                                <option value = '2' > 2 years old </option>
                                <option value = '3' > 3 years old </option>
                                <option value = '4' > 4 years old </option>
                                <option value = '5' > 5 years old </option>
                                <option value = '6' > 6 years old </option>
                                <option value = '7' > 7 years old </option>
                                <option value = '8' > 8 years old </option>
                                <option value = '9' > 9 years old </option>
                                <option value = '10' > 10 years old </option>
                            </select>
                        </label> 

                        <label> Sex
                        <br/>
                            <label className = 'register_thin'> <input type = 'radio' name = 'radio_btn_sex' value = 'male' checked = {this.state.sex === 'male'} onChange = {this.setSex} /> Male </label>
                            <label className = 'register_thin'> <input type = 'radio' name = 'radio_btn_sex' value = 'female' checked = {this.state.sex === 'female'} onChange = {this.setSex} className = 'last-child'/> Female </label>
                        </label>

                        <label> City of Residence
                            <input type = 'text' value = {this.state.location} onChange = {this.setLocation} placeholder = 'example: Lagos' /> 
                        </label>

                        <label> Does your Child deserve the Crown?
                            <br/>
                            <label className = 'register_thin'> <input type = 'radio' name = 'radio_btn_deserve' value = 'yes' checked = {this.state.deserveCrown === 'yes'} onChange = {this.setDeserveCrown} /> Yes </label>
                            <label className = 'register_thin'> <input type = 'radio' name = 'radio_btn_deserve' value = 'no' checked = {this.state.deserveCrown === 'no'} onChange = {this.setDeserveCrown} className = 'last-child'/> No </label>
                        </label>

                        { this.state.deserveCrown === 'yes' && <label> Tell us why <textarea value = {this.state.description} onChange = {this.setDescription} placeholder = {`${this.state.name} deserves the crown because...`} /> </label> }
                        

                        <label className = 'pic-label'> Upload Picture of Child
                            <input type = 'file' accept = 'image/png, image/jpeg' onChange = {this.setImage} />
                            <img src = {this.state.imagePath} alt = '' width = '150' />
                        </label>
                    </section>

                    <section className = 'parent'>
                        <h2> Parent's Information </h2>
                        <label> Name <input type = 'text' value = {this.state.parentName} onChange = {this.setParentName} placeholder = "Parent's Name (optional)" /> </label>
                        <label> Phone Number <input type = 'tel' value = {this.state.tel} onChange = {this.setTel} maxLength = '11' required  placeholder = 'Phone Number'/> </label>
                        <label className = 'register_thin'> <input type = 'checkbox' onChange = {this.isWhatsapp} /> same as whatsapp number? </label>
                        {!this.state.isWhatsapp && <label> Whatsapp Number <input type = 'tel' onChange = {this.setWhatsapp} required placeholder = 'Whatsapp Contact' /> </label>}
                        <label> Email <input type = 'email' value = {this.state.email} onChange = {this.setEmail} placeholder = 'Email Address (optional)'/> </label>

                        <label> Relationship with Child 
                            <select onChange = {this.setRelationship} required>
                                <option value = ''> None </option>
                                <option value = 'Son / Daughter'> Son / Daughter </option>
                                <option value = 'Sibling'> Sibling </option>
                                <option value = 'Nephew / Niece'> Nephew / Niece </option>
                                <option value = 'Others'> Others </option>
                            </select>
                        </label>

                        <input type = 'submit' value = 'REGISTRATION CLOSED' disabled />
                    </section>
                </form>
            </div>
        )
    }
}

export default FormRegister;
