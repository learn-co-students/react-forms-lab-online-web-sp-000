import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.userName && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            onChange={event => this.handleUserNameChange(event)}
            value={this.state.userName}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            onChange={event => this.handlePasswordChange(event)}
            value={this.state.password}
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
