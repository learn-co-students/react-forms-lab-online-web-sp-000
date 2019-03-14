import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleInputChange = event => {
    if (!event.value) {
      return;
    }
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  validateSubmit = event => {
    event.preventDefault();
    if (!event.value) {
      return;
    }
    this.props.onSubmit(this.state);
  }
  render() {
    return (
      <form onSubmit={ event => this.validateSubmit(event)}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.username} 
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={this.handleInputChange}/>
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
