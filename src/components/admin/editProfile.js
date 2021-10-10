import FormRegister from '../../controls/formRegister'
import { connect } from 'react-redux';
import { editContestant } from '../../controls/redux_actions/contestant'

const EditUserPage = (props) => {

    const contestant = props.contestants.find((contestant) => contestant.id === props.match.params.id)

    const NotFound = (
        <h3> User Not Found! </h3>
    )

    const onUpdate = (data) => {
        console.log(data)
        props.dispatch(editContestant({...data}))
    }

    return (
        <div>
            { contestant? <FormRegister contestant = {contestant} onUpdate = {onUpdate} /> : NotFound }
        </div>
    )
}

const mapStateToProps = (store) => ({
    contestants: store.contestants
})

export default connect(mapStateToProps)(EditUserPage)



