import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      submittedData: []
    };
  }

  handleLogin = () => {
    console.log("Hello");
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let formData = {
      username: this.state.username,
      password: this.state.password
    }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listofUsers = () => {
    return this.state.submittedData.map( data => {
      return <div>
        <span>{data.username}</span>
      </div>
    })
  }

  render() {
    return (
      <div>
      <form onSubmit = {e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleLogin}>Log in</button>
        </div>
      </form>
        {this.listofUsers}
        </div>
    );
  }
}

export default LoginForm;
