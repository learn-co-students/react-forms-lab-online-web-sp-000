import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleLogin = event => {
    this.setState({
      username: "",
      password: ""
    })
  }

  handleLogin = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (username && password) {
      const formData = { username, password }
      this.props.handleLogin(formData)
  }
}

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} onChange={this.handleLogin} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.state.password} onChange={this.handleLogin} name="password" type="password" />
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
