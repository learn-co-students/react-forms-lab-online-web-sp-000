import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
      username: ""
    };
  }

  changeHandler = event => this.setState({ [event.target.name]: event.target.value });

  submitHandler = event => {
    event.preventDefault();
    //Only log in if both filled
    if (this.state.password && this.state.username) this.props.handleLogin(this.state);
  }


  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.changeHandler} required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.changeHandler} required/>
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
