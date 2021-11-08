import React from 'react'
import Loader from '../utilities/loader';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import filterContestants from '../../controls/filterContestants'
import pic from './beautiful.jpeg';

class AllContestants extends React.Component {

  constructor(props){
    super()
    this.state = {
      loader: true,
      users: [],
      contestants: [],
      search: '',
      sortBy: ''
    }
  }

  componentDidMount(){
    axios.get('http://143.244.174.52:4000/api/user/getUserData')
    .then((response) => {
        const {search, sortBy} = this.props.sort
        this.setState({ users: response.data.data})
        this.setState({ contestants : filterContestants(this.state.users, {search, sortBy})})
        this.setState({loader: !this.state.loader})
        console.log('done!')
    })
    .catch( (error) =>  {
        console.log(error);
    })
  }

  setSearch = (e) => {
    const search = e.target.value
    this.setState({ search })
    const { sortBy } = this.state
    this.setState({ contestants : filterContestants(this.state.contestants, {search, sortBy})})
  }

  setSortBy = (e) => {
      const sortBy = e.target.value;
      this.setState({ sortBy })
      const { search } = this.state
      this.setState({ contestants : filterContestants(this.state.contestants, {search, sortBy})})
  }

  clearSearch = (e) => {
    const {search, sortBy} = this.props.sort
    this.setState({ contestants : filterContestants(this.state.users, {search, sortBy}), search: '', sortBy: this.props.sort.sortBy})
  }

 render () {
  const {loader} = this.state;

    return ( 


      <div>

      <form onSubmit = {e => e.preventDefault()}>
            <input type = 'text' value = {this.state.search} onChange = {this.setSearch} />
            <select onChange = {this.setSortBy}>
                <option value = 'name'> Name (A-Z) </option>
                <option value = 'vote'> Votes </option>
            </select>
            <input type = 'button' value = 'Clear' onClick = {this.clearSearch} />
          </form>

          {this.state.contestants.map((contestant, index) => {
            return (
              <div key = {index}>
                  <img src = {pic} alt = 'profile' width = '100'/>
                  <h3> {contestant.name} </h3>
                  <p> {contestant.sex} </p>
                  <Link to = {`user/${contestant.id}`}> VIEW </Link>
              </div>
            )
          })}
          
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  sort: state.sort
})

export default connect(mapStateToProps)(AllContestants)
