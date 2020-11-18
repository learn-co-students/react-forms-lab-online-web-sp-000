import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  handleUserChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  handlePWChange = event => {
    this.setState({
      password: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password)
      return 
    this.props.handleLogin(this.state)
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleUserChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.handlePWChange}
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
