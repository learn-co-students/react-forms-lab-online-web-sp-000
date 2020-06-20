import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.username !== "" && this.state.password !== ""){
      this.props.handleLogin(event);
    }
  }

  handleUsernameChange = (event) => {
    //event.persist();
    this.setState(previousState => {
      return {
        ...previousState,
        username: event.target.value
      } 
    })
  }
  
  handlePasswordChange = (event) => {
    //event.persist();
    this.setState(previousState => {
      return {
        ...previousState,
        password: event.target.value
      } 
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
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
