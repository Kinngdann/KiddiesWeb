import ShowContestants from './showContestants'

const Contestants = (props) => {
    
    return (
        <div> 
            <h1> Contestants </h1>
            <ShowContestants {...props} />
        </div>
    )
}

export default Contestants;