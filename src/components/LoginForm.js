import React from "react"
import PropTypes from "prop-types"

class LoginForm extends React.Component {
  state = {
    username: " ",
    password: " "
  }
  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  submitHandler = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
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
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}
export default LoginForm
