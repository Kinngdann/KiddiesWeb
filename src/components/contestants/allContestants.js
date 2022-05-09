import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ScrollToTop from "react-scroll-to-top";
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
        searched: false,
      }
    }
  
    componentDidMount() {
      this.getUserData()
    }

    async getUserData() {
      try {
        const {data} = await axios.get('https://www.kiddiescrown.com/api/user/getUsers');
        const contestants = data.sort((a, b)=> {
          return a.name > b.name? 1 : -1
        })
        
        // console.log(users)
        this.setState({contestants, loader: false})
        window.scrollTo(0, 0)

      } catch (error) {
        console.log(error)
      }
    }

    filterContestants = (contestants) => {
      const keyword = this.state.search;
      return contestants.filter((contestant) => {
          return contestant.name.toLowerCase().includes(keyword.toLowerCase())
      }).sort((a, b) => {
          return a.name > b.name? 1 : -1
      })
    }  
  
    setSearch = (e) => {
      const search = e.target.value;
      this.setState({search})
    }

    onSubmit = (e) => {
      e.preventDefault();
      if(this.state.searched){
        this.setState(() => ({
          contestants : this.filterContestants(this.state.contestants),
          searched: true
        }))} else {
          this.restoreSearch();
      }
    }
    
    restoreSearch = () => {
      window.location.reload();
    }

    showItems = () => {
      return ( 
        <div>
            <div className = 'contestants'>
              {this.state.contestants.map((contestant, index) => {
                return (
                  <div key = {index} className = 'contestants__item'> 
                    <div className = 'wrapper'> 
                      <div className = 'contestants__item__img'> 
                        <img
                          alt = 'contestant'
                          src={`https://kiddiescrown.com/${contestant.picture}`}
                          width = '250'
                        />
                      </div>
                      <h3 className = 'name'> {contestant.name} </h3>
                      <h4> {contestant.sex} | {contestant.age} Year(s) </h4>
                      <div className = 'link'>
                        <Link to = {`vote/${contestant.id}`}> <h3> view </h3> </Link>
                      </div>
                    </div>
                </div>
              )
              })}
            </div>
        </div>
      )
    }


  
  render () {
      return (
        <div >
          <ScrollToTop smooth />
          {/*<div className = 'allcontestant__row1'>
              <form onSubmit = {()=>this.onSubmit} className = 'form--search'>
                <input type = 'text' value = {this.state.search} onChange = {this.setSearch} placeholder = 'Search...' className = 'first--input'/>
                <div onClick = {()=>this.onSubmit}> <input type='button' value={this.state.searched? 'Reset' : 'Search'} /> </div>
              </form>
      </div>*/}
          <this.showItems/>

        {/*
            {this.state.contestants.length > 0? (<div className = 'btns'>
            <input type = 'button' value = 'Prev' onClick = {this.prevList} className = 'btn--prev' />
            <input type = 'button' value = 'Next' onClick = {this.nextList} className = 'btn--next'/>
          </div>) : (<div className = 'no-user-found'>
            <h3> No user found.. </h3>
            <input type = 'button' value = 'Back' onClick = {this.restoreSearch} className = 'btn--next'/>
          </div>)}
        */}

        </div> 
      )
    }
  }
  
export default AllContestants