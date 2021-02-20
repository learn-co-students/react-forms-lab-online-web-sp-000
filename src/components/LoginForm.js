import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  changeValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.handleLogin(event)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text"
            onChange={this.changeValue} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password" 
            onChange={this.changeValue} />
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
