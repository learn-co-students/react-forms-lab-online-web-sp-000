import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameInput = (event) => {
    this.setState({
      ...this.state,
      username: event.target.value
    })
  }

  handlePasswordInput = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    if (this.state.password && this.state.username){
      this.props.handleLogin(this.state) 
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsernameInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordInput}/>
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