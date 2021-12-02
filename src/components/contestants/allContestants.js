import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import filterContestants from '../../controls/filterContestants'
import avatar from './avatar.svg'
import '../styles/components/contestants/_allcontestants.scss'

class AllContestants extends React.Component {

    constructor(props){
      super()
      this.state = {
        loader: true,
        users: [],
        contestants: [],
        search: '',
        sortBy: '',

        currentItems: [],
        pageNumber: 0,
        pageCount: 0,
        leftItems: 0,
        from: 0,
        to: 20
      }
    }
  
    componentDidMount(){
      axios.get('https://www.kiddiescrown.com/api/user/getUserData')
      .then((response) => {
          const {search, sortBy} = this.props.sort
          const users = response.data.data
  
          this.setState(() => ({
            users: response.data.data,
            contestants: this.filterContestants(users, {search, sortBy}),
            loader: false
          }))
      })
      .catch( (error) => {
          console.log(error);
      })

      const pageNumber = Math.floor(this.state.contestants.length / 20)
      const leftItems = this.state.contestants.length % 20
      this.setState({pageNumber, leftItems})
    }

    filterContestants = (contestants, {search, sortBy}) => {
      return contestants.filter((contestant) => {
          return contestant.name.toLowerCase().includes(search.toLowerCase())
      }).sort((a, b) => {
          if (sortBy === 'name'){
              return a.name > b.name? 1 : -1
          } else if (sortBy === 'vote'){
              return b.votes.stageOne > a.votes.stageOne? 1 : -1
          }
          return 1;
      })
    }  
  
    setSearch = (e) => {
      const search = e.target.value
      this.setState({ search })
      const { sortBy } = this.state
      this.setState({ contestants : this.filterContestants(this.state.contestants, {search, sortBy})})
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

    showItems = () => {
      const {from, to} = this.state
      const currentItems = this.state.contestants.slice(from, to)

      return ( 
        <div>
            <div className = 'contestant'>
              {this.state.search? this.state.contestants.map((contestant, index) => {
                  return (
                    <div key = {index} className = 'contestant__item'>
                      <div className = 'wrapper'>
                        <div className = 'contestant__item__img'> <img src = { contestant.pictures? `http://143.244.174.52:4000/${contestant.pictures}` : avatar} alt = 'contestant' width = '250'/> </div>
                        <h3 className = 'name'> {contestant.name} </h3>
                        <h4> {contestant.sex} | {contestant.age} Year(s) </h4>
                        <div className = 'link'>
                          <Link to = {`contestant/${contestant.id}`}> <h3> view </h3> </Link>
                        </div>
                      </div>
                    </div>
                )
              }) : currentItems.map((contestant, index) => {
                return (
                  <div key = {index} className = 'contestant__item'>
                    <div className = 'wrapper'>
                      <div className = 'contestant__item__img'> <img src = { contestant.pictures? `http://143.244.174.52:4000/${contestant.pictures}` : avatar} alt = 'contestant' width = '250'/> </div>
                      <h3 className = 'name'> {contestant.name} </h3>
                      <h4> {contestant.sex} | {contestant.age} Year(s) </h4>
                      <div className = 'link'>
                        <Link to = {`contestant/${contestant.id}`}> <h3> view </h3> </Link>
                      </div>
                    </div>
                </div>
              )
              })}
            </div>
            
        </div>
      )
    }

    nextList = () => {
      // this.setState({pageCount: this.state.pageCount + 1})
      // if (this.state.pageCount === this.state.pageNumber){
      //   this.setState(() => ({
      //     from: this.state.from + 20,
      //     to: this.state.pageNumber,
      //   }))
      // } else {
      //   this.setState(() => ({
      //     from: this.state.from + 20,
      //     to: this.state.to + 20,
      //   }))
      // }
      this.setState(() => ({
        from: this.state.from + 20,
        to: this.state.to + 20,
      }))
    }

    prevList = () => {
      console.log('prev')
      this.setState(() => ({
        from: this.state.from - 20,
        to: this.state.to - 20
      }))
    }
  
  render () {
      return (
        <div >
        {/*
          <form onSubmit = {e => e.preventDefault()}>
            <input type = 'text' value = {this.state.search} onChange = {this.setSearch} />
            <select onChange = {this.setSortBy}>
              <option value = 'name'> Name (A-Z) </option>
            </select>
            <input type = 'button' value = 'Clear' onClick = {this.clearSearch} />
          </form>
        */}

          <this.showItems/>
          <div className = 'btns'>
            <input type = 'button' value = 'Prev' onClick = {this.prevList} className = 'btn--prev' />
            <input type = 'button' value = 'Next' onClick = {this.nextList} className = 'btn--next'/>
          </div>
        </div> 
      )
    }
  }
  
  const mapStateToProps = (state) => ({
    sort: state.sort
  })
  
  export default connect(mapStateToProps)(AllContestants)