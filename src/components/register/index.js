import { connect } from 'react-redux'
import FormRegister from '../../controls/formRegister'
import {addContestant} from '../../controls/redux_actions/contestant'
import nextId from 'react-id-generator';


const Register = (props) => {

    const ID = () => {
        const id = nextId(' ')
        const pad = '0000'
        return (pad.substring(0, pad.length - id.length ) + id).split(' ').join('')
    }

    const onSubmit = (userData) => {
        props.dispatch(addContestant({ ...userData, id: ID()}))
        console.log(userData)
    }

    return (
        <div>
            <h3> Hello form </h3>
            <FormRegister onSubmit = {onSubmit} />
        </div>
    )
}

export default connect()(Register)
