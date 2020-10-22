import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handlePwordChange = (event) => {
  //   this.setState({
  //     password: event.target.value
  //   })
  //
  // }
  handleSubmit = (event) => {
      event.preventDefault()
      let username = this.state.username
      let password = this.state.password
      if (username !== "" && password !== "") {
      this.props.handleLogin({username, password})
    }
  }



  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>

        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={event => this.handleInputChange(event)}

              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={event => this.handleInputChange(event)}/>
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
