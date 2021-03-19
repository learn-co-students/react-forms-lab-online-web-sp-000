import React from "react"

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (username.length > 0 && password.length > 0) {
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} >
        <div>
          <label>
            Username&nbsp;
            <input
              id="username"
              name="username"
              type="text"
              onChange={e => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password&nbsp;
            <input
              id="password"
              name="password"
              type="password"
              onChange={e => this.handleChange(e)}
              value={this.state.password}
            />
          </label>
        </div><br/>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
