import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  verifyFields = () =>
    this.state.username.length > 0 && this.state.password.length > 0;

  handleLogin = event => {
    event.preventDefault();
    if (this.verifyFields()) this.props.handleLogin(this.state);
  };

  render() {
    return (
      <form onSubmit={event => this.handleLogin(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={event => this.change(event)}
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
              onChange={event => this.change(event)}
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
