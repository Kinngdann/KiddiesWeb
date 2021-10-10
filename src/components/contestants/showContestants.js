import { connect } from 'react-redux';
import Search from './searchBar'
import sortContestants from '../../controls/sortContestants'
import { Link } from "react-router-dom";
// import { addVote } from '../../controls/redux_actions/contestant';


const ShowContestants = (props) => {
  
  // const handleVotes = ({id, no}) => {
  //   props.dispatch(addVote({ id, no }))
  // }
 
  return (
    <div>
      <Search />
      {props.contestants.map((contestant, index) => {
        return (
          <li key = {contestant.id}> 
            <Link to = {`${props.location.pathname}/${contestant.id}`} > 
                {contestant.name} - {contestant.id} - {contestant.votes.stageOne}
            </Link> 
          </li>
        )
      })}
    </div>
  );
} 

const mapStateToProps = (state) => ({
    contestants: sortContestants(state.contestants, state.sort)
})

export default connect(mapStateToProps)(ShowContestants)
