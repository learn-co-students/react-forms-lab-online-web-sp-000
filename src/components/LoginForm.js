// This component takes one prop: handleLogin which is a function — this function is called when the form is being submitted. By default, this function currently just includes console.log. That will allow you to see if the form is functioning correctly when working in your browser.
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary attributes to these inputs. The input values should be saved to the component's state on every change.
// Remember that you can retrieve the input name and value of an event.target from the JS event.

// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.

// The onSubmit callback prop should only be called if both fields are filled in (with any value).

import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { username, password } = this.state;
    
  //   if (username && password) {
  //     this.props.onSubmit(this.state)
  //   }
  // }

  handleSubmit = event => {
    event.preventDefault()

      // should not call the `handleLogin` callback prop when the username and/or password fields are empty
    if (!this.state.username || !this.state.password) return 

    this.props.handleLogin(this.state) // should call the `handleLogin` callback prop when the form is being submitted
  }

  // handleSubmit = event => {
  //   event.preventDefault()

  //     // should not call the `handleLogin` callback prop when the username and/or password fields are empty
  //   if (this.state.username && this.state.password) return 

  //   this.props.handleLogin(this.state) // should call the `handleLogin` callback prop when the form is being submitted
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
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
