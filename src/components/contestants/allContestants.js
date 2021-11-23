import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import filterContestants from '../../controls/filterContestants'
// import '../styles/components/contestants/_allcontestants.scss'

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
    axios.get('https://www.kiddiescrown.com/api/user/getUserData')
    .then((response) => {
        const {search, sortBy} = this.props.sort
        const users = response.data.data

        this.setState(() => ({
          users: response.data.data,
          contestants: filterContestants(users, {search, sortBy}),
          loader: false
        }))
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

          <div className = 'contestant'>
            {this.state.contestants.map((contestant, index) => {
              return (
                <div key = {index} className = 'contestant__item'>
                  <div className = 'wrapper'>
                    <div className = 'contestant__item__img'> <img src = {`http://143.244.174.52:4000/${contestant.pictures}`} alt = 'contestant' width = '250'/> </div>
                    <h3> {contestant.name} </h3>
                    <p> {contestant.sex} </p>
                    <Link to = {`contestant/${contestant.id}`}> VIEW </Link>
                  </div>
                </div>
              )
            })}
          </div>
          
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  sort: state.sort
})

export default connect(mapStateToProps)(AllContestants)
// http://143.244.174.52:4000/
