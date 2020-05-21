import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    let savedTarget = event.target
    this.setState({
      [savedTarget.name]: savedTarget.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let savedTarget = event.target
    console.log(savedTarget)
    let formData = { username: this.state.username, password: this.state.password }
    if(formData.username !== '' && formData.password !== '') {
      this.props.handleLogin(formData)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
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
