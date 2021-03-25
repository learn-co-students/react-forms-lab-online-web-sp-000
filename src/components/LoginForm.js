import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  usernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  passwordChange = event => {
    this.setState({
      password: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    if (this.state.username && this.state.password) 

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text"
            onChange = {event => this.usernameChange(event)}  />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password"
            onChange = {event => this.passwordChange(event)}  />
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
