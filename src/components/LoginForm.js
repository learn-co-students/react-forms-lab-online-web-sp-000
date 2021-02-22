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

  handleSubmit = event => {
     event.preventDefault()
     const username = this.state.username
     const password = this.state.password

     if (username && password) {this.props.handleLogin(this.state)}
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" 
                   name="username" 
                   type="text" 
                   value={this.state.username}
                   onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
                   name="password" 
                   type="password" 
                   onChange={this.handleChange}
                   value={this.state.password} />
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
