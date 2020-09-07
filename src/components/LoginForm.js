import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

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

  login = event => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
      if (username.length !== 0 && password.length !== 0) {
        this.props.handleLogin({username, password})
      }
  }



  render() {
    return (
      <form onSubmit={e => this.login(e)}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            type="text"
            name="username" 
            value={this.state.username}  
            onChange={e => this.handleChange(e)} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password"  
            type="password"
            name="password" 
            value={this.state.password}
            onChange={e => this.handleChange(e)}/>
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
