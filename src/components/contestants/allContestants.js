import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ScrollToTop from "react-scroll-to-top";
import avatar from './images/avatar.svg'
import goldTick from './images/goldTick.svg'
import blueTick from './images/blueTick.svg'
import grayTick from './images/grayTick.svg'
import search from './images/search.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/components/contestants/_allcontestants.scss'

class AllContestants extends React.Component {

    constructor(props){
      super()
      this.state = {
        loader: true,
        users: [],
        contestants: [],
        currentItems: [],
        search: '',
        checkContestant: true,
        from: 0,
        to: 20
      }

      this.trueContestants = true
    }
  
    componentDidMount(){
      axios.get('https://www.kiddiescrown.com/api/user/getUserData')
      .then((response) => {
          const users = response.data.data  
          this.setState(() => ({
            users: response.data.data,
            contestants: this.filterContestants(users, ''),
            loader: false
          }))
      })
      .catch( (error) => {
          console.log(error);
      })

      window.scrollTo(0, 0)
    }

    filterContestants = (contestants, search) => {
      return contestants.filter((contestant) => {
          return contestant.name.toLowerCase().includes(search.toLowerCase())
      }).sort((a, b) => {
          return a.name > b.name? 1 : -1
      })
    }  
  
    setSearch = (e) => {
      const search = e.target.value
      this.setState({search})
    }

    onSubmit = (e) => {
      e.preventDefault()
      this.setState(() => ({
        contestants : this.filterContestants(this.state.users, this.state.search)
      }))
    }

    tick = (vote) => {
      if(vote > 1000 ){
          return goldTick
      } else if (vote >= 300 ) {
          return blueTick
      } else if (vote > 0 && vote < 300) {
          return grayTick
      }
  }

    showItems = () => {
      const {from, to} = this.state
      const currentItems = this.state.contestants.slice(from, to)

      if (!this.state.contestants) {
        this.setState({checkContestant: false})
      }  


      return ( 
        <div>
            <div className = 'contestant'>
              {this.state.search? this.state.contestants.map((contestant, index) => {
                  return (
                    <div key = {index} className = 'contestant__item'>
                    {contestant.votes.stageTwo > 0 && <img src = {this.tick(contestant.votes.stageTwo)} alt = 'tick' width = '50' className = 'tick'/>}
                      <div className = 'wrapper'>
                        <div className = 'contestant__item__img'> 
                          <LazyLoadImage
                            alt = 'contestant'
                            src = { contestant.pictures? `http://143.244.174.52:4000/${contestant.pictures}` : avatar}
                            width = '250'
                            effect = 'Black and white'
                          />
                        </div>
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
                    {contestant.votes.stageTwo > 0 && <img src = {this.tick(contestant.votes.stageTwo)} alt = 'tick' width = '50' className = 'tick'/>}
                    <div className = 'wrapper'> 
                      <div className = 'contestant__item__img'> 
                        <LazyLoadImage
                          alt = 'contestant'
                          src = { contestant.pictures? `http://143.244.174.52:4000/${contestant.pictures}` : avatar}
                          width = '250'
                          effect = 'Black and white'
                        />
                      </div>
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

      this.setState(() => ({
        from: this.state.from + 20,
        to: this.state.to + 20,
      }))

      this.setState({loader: true})
      window.scrollTo(0, 0)
    }

    prevList = () => {
      this.setState(() => ({
        from: this.state.from - 20,
        to: this.state.to - 20,
      }))

      window.scrollTo(0, 0)
    }

    restoreSearch = () => {
      window.location.reload();
    }
  
  render () {
      return (
        <div >
          <ScrollToTop smooth />
          <div className = 'allcontestant__row1'>
            <form onSubmit = {this.onSubmit} className = 'form--search'>
              <input type = 'text' value = {this.state.search} onChange = {this.setSearch} placeholder = 'Search...' className = 'first--input'/>
              <div onClick = {this.onSubmit}> <img src = {search} width = '20' alt = 'search icon' /> </div>
            </form>
          </div>

          <this.showItems/>

          {this.state.contestants.length > 0? (<div className = 'btns'>
            <input type = 'button' value = 'Prev' onClick = {this.prevList} className = 'btn--prev' />
            <input type = 'button' value = 'Next' onClick = {this.nextList} className = 'btn--next'/>
          </div>) : (<div className = 'no-user-found'>
            <h3> No user found.. </h3>
            <input type = 'button' value = 'Back' onClick = {this.restoreSearch} className = 'btn--next'/>
          </div>)}
        </div> 
      )
    }
  }
  
export default AllContestants