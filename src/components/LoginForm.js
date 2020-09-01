import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let formData = {username: this.state.username, password: this.state.password}
    if (formData["username"] && formData["password"]) {
      this.props.handleLogin(formData);
    }
  }

  render() {
    return (
      <form onSubmit={e=> this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input onChange={e => this.handleChange(e)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.handleChange(e)} id="password" name="password" type="password" value={this.state.password} />
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
