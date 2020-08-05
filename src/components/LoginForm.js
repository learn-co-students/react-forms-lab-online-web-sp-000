import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = event => {
    event.preventDefault()
    const username = this.state.username
    const pass = this.state.password
    if (pass.length !== 0 && username.length !== 0) {
      this.props.handleLogin({username, pass})
    }
  }

  render() {
    return (
      <form onSubmit={event => this.login(event)}>
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} name="username" type="text" onChange={event => this.handleChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.state.password} name="password" type="password" onChange={event => this.handleChange(event)} />
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
