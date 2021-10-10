import React from 'react';
import { Link } from 'react-router-dom';

class FormRegister extends React.Component{
    constructor(props){

        super()
        this.check = props.contestant? true : false
        console.log('here', props)

        this.state = {
            name: this.check? props.contestant.name : '',
            age: this.check? props.contestant.age : 'undefined',
            sex: this.check? props.contestant.sex : '',
            location: this.check? props.contestant.location : '',
            description: this.check?  props.contestant.description : '',
            pictures: this.check? props.contestant.pictures : [],
            tel: this.check? props.contestant.tel : '',
            parentName: this.check? props.contestant.parentName : '',
            deserveCrown: this.check? 'yes' : 'no',
            isWhatsapp: false,
            whatsapp: this.check? props.contestant.whatsapp : '',
            email: this.check? props.contestant.email : '',
            relationship: this.check? props.contestant.relationship : '',
            nigerian: this.check? 'checked' : false,
            tc: this.check? 'check' : false,
        }
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

    setPictures = (e) => {
        const pictures = e.target.files
        this.setState(() => ({ pictures }))
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

    isNigerian = () => {
        this.setState(() => ({ nigerian: !this.state.nigerian}))
    }

    isTC = () => {
        this.setState(() => ({ tc: !this.state.tc}))
    }

    isPrivacy = () => {
        this.setState(() => ({ privacy: !this.state.privacy}))
        console.log(this.state.privacy)
    }

    onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            name: this.state.name,
            age: this.state.age,
            sex: this.state.sex,
            location: this.state.location,
            description: this.state.description,
            pictures: this.state.pictures,
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
        
        this.props.onSubmit(userData)
    }

    onUpdate = (e) => {
        e.preventDefault()
        const userData = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            sex: this.state.sex,
            location: this.state.location,
            description: this.state.description,
            pictures: this.state.pictures,
            tel: this.state.tel,
            whatsapp: this.state.whatsapp || this.state.tel,
            parentName: this.state.parentName,
            email: this.state.email,
            relationship: this.state.relationship,
        }

        this.props.onUpdate(userData)
        console.log('Submitted!')

    }

    render(){
        return(
            <form onSubmit = {this.check? this.onUpdate : this.onSubmit}>
                <legend> --------- Child/Contestant --------- </legend>
                <label> Full Name <input type = 'text' value = {this.state.name} onChange = {this.setName} placeholder = 'Enter full name' required/> </label>
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

                <label> <input type = 'radio' name = 'radio_btn_sex' value = 'male' checked = {this.state.sex === 'male'} onChange = {this.setSex} required/> Male </label>
                <label> <input type = 'radio' name = 'radio_btn_sex' value = 'female' checked = {this.state.sex === 'female'} onChange = {this.setSex}/> Female </label>
                <label> <input type = 'radio' name = 'radio_btn_sex' value = 'rather not say' checked = {this.state.sex === 'rather not say'} onChange = {this.setSex}/> Rather not say </label>

                <label> State of Residence <input type = 'text' value = {this.state.location} onChange = {this.setLocation} placeholder = 'Enter Location' /> </label>

                <label> Does you child/ward deserve the crown?
                    <label> <input type = 'radio' name = 'radio_btn_deserve' value = 'yes' checked = {this.state.deserveCrown === 'yes'} onChange = {this.setDeserveCrown} required/> Yes </label>
                    <label> <input type = 'radio' name = 'radio_btn_deserve' value = 'no' checked = {this.state.deserveCrown === 'no'} onChange = {this.setDeserveCrown}/> No </label>
                </label>

                { this.state.deserveCrown === 'yes' && <label> Tell us why <textarea value = {this.state.description} onChange = {this.setDescription} placeholder = 'Why does your child deserve the crown? (optional)' /> </label> }                
                <label> Upload picture <input type = 'file' accept = 'image/jpeg' multiple onChange = {this.setPictures} required /> </label>

                <legend> --------- Parent/Guardian --------- </legend>

                <label> Name <input type = 'text' value = {this.state.parentName} onChange = {this.setParentName} placeholder = 'Enter full name' /> </label>
                <label> Phone Number <input type = 'tel' pattern = '^-?[0-9]\d*\.?\d*$' value = {this.state.tel} onChange = {this.setTel} maxLength = '11' required /> </label>
                <label> Same as whatsapp number? <input type = 'checkbox' onChange = {this.isWhatsapp} /> </label>
                {!this.state.isWhatsapp && <label> Whatsapp Number <input type = 'tel' onChange = {this.setWhatsapp} required /> </label>}
                <label> Email <input type = 'email' value = {this.state.email} onChange = {this.setEmail} /> </label>

                <label> Relationship with child 
                    <select onChange = {this.setRelationship} required>
                        <option value = ''> None </option>
                        <option value = 'Son / Daughter'> Son / Daughter </option>
                        <option value = 'Sibling'> Sibling </option>
                        <option value = 'Nephew / Niece'> Nephew / Niece </option>
                        <option value = 'Others'> Others </option>
                    </select>
                </label>

                <input type = 'checkbox' name = 'checkbox' onChange = {this.isNigerian} /> <span> I agree that my Child is a Nigerian </span> <br/>
                <input type = 'checkbox' name = 'checkbox' onChange = {this.isTC} /> <span> I agree to the <Link to = ''> Privacy Policy </Link> </span> <br/>
                <input type = 'submit' value = {this.check? 'Update' : 'Register'} disabled = {!(this.state.nigerian && this.state.tc)} />
            </form>
        )
    }
}

export default FormRegister;
