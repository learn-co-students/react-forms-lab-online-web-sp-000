import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordInput: '',
      usernameInput: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      usernameInput: event.target.value
    })

  }

  handlePasswordChange = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('in submit')

    if(!this.state.usernameInput || !this.state.passwordInput){return} 
    else{this.props.handleLogin(this.state)}
    console.log('handleLogin', this.props.handleLogin(this.state))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange} value={this.state.passwordInput}/>
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
