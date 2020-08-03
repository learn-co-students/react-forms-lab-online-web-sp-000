import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkForUsernameAndPassword = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if (username && password) {
      this.props.handleLogin({username, password});
    }
  }

  render() {
    return (
      <form onSubmit={this.checkForUsernameAndPassword}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleOnChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleOnChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
