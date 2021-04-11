import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '', 
      password: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault() 
    let formData = {
      username: this.state.username,
      password: this.state.password
    }
    if (this.state.username && this.state.password) {
      this.props.handleLogin(formData)
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

   render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleUsernameChange}
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
              onChange={this.handlePasswordChange} 
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
