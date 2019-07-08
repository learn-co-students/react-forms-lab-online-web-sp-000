import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password:  e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange}  />
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
