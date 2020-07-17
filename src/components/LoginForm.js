import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  usernameHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  passwordHandler = event => {
    this.setState({
      password: event.target.value
    })
  }

  submitHandler = (event) => {
    event.target.preventDefault()
    this.props.handleLogin({username: this.state.username, password: this.state.password})
  }

  login = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      return this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.login(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.usernameHandler(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.passwordHandler(event)}/>
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
