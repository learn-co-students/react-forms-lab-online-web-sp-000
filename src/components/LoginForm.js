import React from 'react'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: null,
      password: null
    }
  }

  handleChangeUsername = e => this.setState({ username: e.target.value })
  handleChangePassword = e => this.setState({ password: e.target.value })
  onSubmit = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      return this.props.handleLogin(this.state)
    }
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              id='username'
              name='username'
              type='text'
              onChange={this.handleChangeUsername}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id='password'
              name='password'
              type='password'
              onChange={this.handleChangePassword}
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
