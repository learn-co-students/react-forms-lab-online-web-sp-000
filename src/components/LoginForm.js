import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      saveUsername: "",
      savePassword: ""
    };
  }

  handleUsername = (event) => {
    this.setState({saveUsername: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({savePassword: event.target.value})
  }

  handleSubmit = (event, username, password) => {
    event.preventDefault()
    if (username != "" && password != ""){
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event, this.state.saveUsername, this.state.savePassword)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.saveUsername} onChange={event => this.handleUsername(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.savePassword} onChange={event => this.handlePassword(event)}/>
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
