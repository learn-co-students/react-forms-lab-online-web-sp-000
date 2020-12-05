import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  bbll = event => {
    event.preventDefault();
    console.log(event.target);

  }

  render() {
    return (
      <form onSubmit={event => this.bbll(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" />
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
