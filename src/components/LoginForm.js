import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      handleLogin: props.handleLogin,
      username: "",
      password: ""
    };
  }

  changeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  submitInput = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
  
    if(username.length !== 0 && password.length !== 0) {
      this.state.handleLogin({username: username, password: password})
    }
  }

  render() {
    return (
      <form onSubmit={event => this.submitInput(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.changeInput(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.changeInput(event)} />
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
