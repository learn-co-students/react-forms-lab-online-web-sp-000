import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  usernameChange = (username) => {
    this.setState((previousState) => {
      return {
        ...previousState,
        username: username
      }
    })
  }

  passwordChange = (password) => {
    this.setState((previousState) => {
      return {
        ...previousState,
        password: password
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin({
        username: this.state.username,
        password: this.state.password
      })
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={(event)=> this.usernameChange(event.target.value)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={(event)=> this.passwordChange(event.target.value)} id="password" name="password" type="password" value={this.state.password} />
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
