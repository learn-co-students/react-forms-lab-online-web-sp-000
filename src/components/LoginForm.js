import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }



  render() {
    return (
      <form onSubmit={event=> {
        event.preventDefault()
        if (!this.state.username || !this.state.password) return null
        this.props.handleLogin(this.state)
        }}>
        
        
        <div>
          <label>
            Username
            <input 
            id="username" 
            onChange={event => this.setState({username: event.target.value})}
            value={this.state.username}
            name="username" 
            type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            onChange={event => this.setState({password: event.target.value})}
            value={this.state.password}
            name="password" 
            type="password" />
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
