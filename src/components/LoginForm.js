import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = event => {
    console.log(event.target.value, event.target.id)
    this.setState({
      [event.target.id]: event.target.value
    })
    
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.username && this.state.password) {
      return this.props.handleLogin(this.state)
    }
    console.log(this.state)
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
            onChange={this.handleLogin}
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
            onChange={this.handleLogin}
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
