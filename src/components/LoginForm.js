import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {onSubmit: this.props.onSubmit,
                  username: '',
                  password: ''};
  }

  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      this.state.onSubmit();
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
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
              value={this.state.password}
              onChange={this.handleInputChange}
            />
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

// onsubmit function
// login = ({ username, password }) => {
//   console.log(`Logging in ${username} with password ${password}`);
// };
