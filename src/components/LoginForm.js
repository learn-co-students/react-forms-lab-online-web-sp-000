import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  username = e => {
    this.setState({username: e.target.value})
  }

  password = e => {
    this.setState({password: e.target.value})
  }

  submit = e => {
    e.preventDefault()
    if (this.state.username && this.state.password)
      this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.submit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.username(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.password(event)} id="password" name="password" type="password" value={this.state.password}/>
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
