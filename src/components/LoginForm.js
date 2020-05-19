import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitLogic = () => ((this.state.username.length > 0) && (this.state.password.length > 0))

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.submitLogic()) this.props.handleLogin()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.props.handleLogin}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
