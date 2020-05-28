import React from "react";

class LoginForm extends React.Component {
  state = {
    username: ""
  };
  

  handleLogin = event => {
    event.preventDefault()
    this.setState({
      `${this.props.name}`: event.target.value
    })
    console.log(event)
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleLoginUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleLoginPassword}
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
