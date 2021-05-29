import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: ""};
  }

  handleInput = e => {
    this.setState( {
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const name = this.state.username
    const pass = this.state.password

    if  (name === "" || pass === "") {
      console.log('No')
    } else {
      this.props.handleLogin(name, pass)
    }
  }

  render() {
    return (
      <form onSubmit={ e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username"
                   name="username"
                   type="text"
                   value={this.state.username}
                   onChange={e => this.handleInput(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
                   name="password"
                   type="password"
                   value={this.state.password}
                   onChange={e => this.handleInput(e)}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
