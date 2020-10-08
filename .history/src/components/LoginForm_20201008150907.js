import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if(this.state.username || this.state.password) 
    return 
console.log(e);
this.props.handleLogin(this.state)
    // }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange} 
                   value={this.state.username}
                   id="username" 
                   name="username" 
                   type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={console.log('working')} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button onSubmit={this.handleSubmit} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
