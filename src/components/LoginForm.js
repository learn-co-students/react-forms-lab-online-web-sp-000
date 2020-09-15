import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      formData:{}
    }
  }
    
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
            type="text"
            name="firstName"
            onChange={event => this.handleChange(event)}
            value={this.props.firstName}
          />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            type="text"
            name="lastName"
            onChange={event => this.handleChange(event)}
            value={this.props.lastName} />
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
