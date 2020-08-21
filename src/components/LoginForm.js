import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  on_submit = (event) => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.handleLogin()
    }
  }
  get_username = (event) => {
    this.setState({
      username: event.target.value
    })

  }
  get_password = (event) => {
    this.setState({
      password: event.target.value
    })

  }

  render() {
    return (
      <form  onSubmit={event => this.on_submit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.get_username(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.get_password(event)} value={this.state.password}/>
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
