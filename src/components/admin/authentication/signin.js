import React from "react";

class Signin extends React.Component {
    

    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            errorMsg: '',
            // invalidMsg: ''
        }
        
        // const history = useHistory()
        console.log('auth', localStorage.getItem('isAuthenticated'))
    }

    setUserName = (e) => {
        const username = e.target.value 
        this.setState({username})
    }

    setPassword = (e) => {
        const password = e.target.value 
        this.setState({password})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.username === '' || this.state.password === "") {
            this.setState({errorMsg: 'Empty username/password field'})
        } else if (this.state.username === "admin" && this.state.password === "1234") {
            // localStorage.setItem("isAuthenticated", "true");
            sessionStorage.setItem('isAuthenticated', 'true')
            window.location.pathname = "/admin";
        } else {
            this.setState({invalidMsg: 'details are incorrect'})
        }
    }

  render(){
    const {username, password, errorMsg} = this.state
    return (
        <div className="text-center">
          <h1>Signin Admin</h1>
          <form onSubmit = {this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input type = "text" value = {username} onChange = {this.setUserName} className = "form-control" />
            </div>
    
            <div className="form-group">
              <label>Password</label>
              <input type = "password" value = {password} onChange={this.setPassword} className = "form-control" />
            </div>

            <input type = 'submit' value = 'submit' onClick = {this.handleSubmit} className="btn btn-primary" />
    
            {errorMsg && (
              <p> Danger! {errorMsg} </p>
            )}
          </form>
        </div>
      );
  }
}

export default Signin;