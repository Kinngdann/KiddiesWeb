import React from 'react'
import '../styles/helpers/_accordion.scss';

class Accordion extends React.Component {
    constructor (props){
        super()

        this.state = {
            toggle: false
        }
    }

    toggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

  render(){

    const {title, content} = this.props

    return (
        <div className = 'accordion-item' key = {title}>
          <div className = 'accordion-title' onClick = {this.toggle}>
            <div> <h4> {title} </h4> </div>
            <div> {this.state.toggle? '-' : '+'}</div>
          </div>
          {this.state.toggle && <div className = 'accordion-content'> {<p> {content} </p>}</div>}
        </div>
      )
  } 
}

export default Accordion;