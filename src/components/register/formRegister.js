import React from 'react';
import Loader from '../utilities/loader'
import axios from 'axios'
import RegModal from './regModal'
import '../styles/components/register/_register.scss'

class FormRegister extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {},
            modal: false,
            loader: true,
            name: '',
            age: '',
            sex: '',
            location: '',
            description: '',
            phone1: '',
            phone2: '',
            parentName: '',
            deserveCrown: '',
            isWhatsapp: false,
            relationship: '',
            file: null,
            imagePath: '',
            comment: ''
        }
    }

    componentDidMount() {
        this.setState({loader: false})
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

    setPhone1 = (e) => {
        const phone1 = e.target.value
        this.setState(() => ({ phone1 }))
    }
    
    setPhone2 = (e) => {
        const phone2 = e.target.value
        this.setState(() => ({ phone2 }))
    }

    isWhatsapp = () => {
        this.setState(() => ({isWhatsapp: !this.state.isWhatsapp}))
    }

    setDeserveCrown = (e) => {
        const deserveCrown = e.target.value
        this.setState(() => ({ deserveCrown }))
    }

    setRelationship = (e) => {
        const relationship = e.target.value
        this.setState(() => ({ relationship }))
    }

    setImage = (e) => {
        const file = e.target.files[0]
        const imagePath = URL.createObjectURL(file)
        this.setState(() => ({ file, imagePath }))
    }

    rmvModal = () => {
        this.setState({modal: false})
    }

    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({loader: true})
        const check = localStorage.getItem('isRegistered')
        if (check) {
            this.setState({
                loader: false,
                comment: 'We\'re sorry, you can only register one contestant/household',
                modal: true
            })
        } else {
            const userData = {
                name: this.state.name,
                age: this.state.age,
                gender: this.state.sex,
                location: this.state.location,
                description: this.state.description,
                phone1: this.state.phone1,
                phone2: this.state.phone2 || this.state.phone1,
                parentName: this.state.parentName,
                relationship: this.state.relationship,
            }
    
            const formData = new FormData()
            formData.append(
                'user', JSON.stringify(userData)
            )

            if (this.state.file){
                const file = this.state.file
                formData.append(
                    'picture',
                    file,
                    'picture'
                )
            }

            try {
                const {status, data} = await axios.post(
                    'https://kiddiescrown.com/api/user/new',
                    // 'http://localhost:4000/api/user/new',
                    formData
                )
                if (status === 200){
                    localStorage.setItem('isRegistered', true)
                    this.setState(()=>({
                        data,
                        loader: false,
                        comment: 'Your registration was successful!',
                        modal: true
                    }))
                }
            } catch (error) {
                alert(error.message);
            }
        }
    }


    render(){
        return(
            <div className = 'form-div'>
                <RegModal 
                    active = {this.state.modal} 
                    data = {this.state.data} 
                    rmvModal = {this.rmvModal}
                    comment = {this.state.comment}
                />
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

                        <label> Gender
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
                            <input type = 'file' accept = 'image/png, image/jpeg' onChange = {this.setImage} required />
                            <img src = {this.state.imagePath} alt = '' width = '150' />
                        </label>
                    </section>

                    <section className = 'parent'>
                        <h2> Parent's Information </h2>
                        <label> Name <input type = 'text' value = {this.state.parentName} onChange = {this.setParentName} placeholder = "Parent's Name (optional)" /> </label>
                        <label> Phone Number <input type = 'tel' value = {this.state.phone1} onChange = {this.setPhone1} maxLength = '11' required  placeholder = 'Phone Number'/> </label>
                        <label className = 'register_thin'> <input type = 'checkbox' onChange = {this.isWhatsapp} /> same as whatsapp number? </label>
                        {!this.state.isWhatsapp && <label> Whatsapp Number <input type = 'tel' value={this.state.phone2} onChange = {this.setPhone2} required placeholder = 'Whatsapp Contact' /> </label>}

                        <label> Relationship with Child
                            <select onChange = {this.setRelationship} required>
                                <option value = ''> None </option>
                                <option value = 'Son / Daughter'> Son / Daughter </option>
                                <option value = 'Sibling'> Sibling </option>
                                <option value = 'Nephew / Niece'> Nephew / Niece </option>
                                <option value = 'Others'> Others </option>
                            </select>
                        </label>

                        <input type = 'submit' value = 'REGISTER' />
                    </section>
                </form>
            </div>
        )
    }
}

export default FormRegister;
