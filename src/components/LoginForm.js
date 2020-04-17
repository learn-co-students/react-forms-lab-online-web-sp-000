import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if(this.state.username && this.state.password ) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleInputChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

//prop- handleLogin function, called when form submitted, right now includes console.log
//add attributes to inputs to make controlled, should update state on every change
//use event.target to retrieve input name and value
//add event handler for onSubmit callback
//onSubmit only if BOTH fields filled in