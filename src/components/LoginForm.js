import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value
      
    })
  }

  updatePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  submitForm = event => {
    event.preventDefault()    
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.submitForm(event)} >
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username"
              value={this.state.username}
              onChange={this.updateUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.updatePassword}
            />
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
