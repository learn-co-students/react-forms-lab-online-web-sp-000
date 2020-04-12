import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin(this.state)
    }
  }
  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username"
              onChange={(event) => this.handleLoginChange(event)}
              value={this.state.username}
              type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password"
              onChange={(event) => this.handleLoginChange(event)}
              value={this.state.password}
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
