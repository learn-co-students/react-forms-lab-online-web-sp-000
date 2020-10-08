import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  handleInputChange = e => {
    let input = e.target.value
  }

  handleSubmit = e => {
    // if(this.state.username && this.state.password) {
      e.preventDefault()
console.log(e);
console.log('DONE');
    // }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange} 
                   value={this.state.username}
                   id="username" 
                   name="username" 
                   type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={console.log('hi') } id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button onSubmit={this.handleSubmit} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
