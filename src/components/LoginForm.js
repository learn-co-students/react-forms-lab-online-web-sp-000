import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }


  usernameChange=(e)=> {

    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  passwordChange=(e)=> {

    console.log("password change",e.target.value)
    this.setState({
      password: e.target.value
    })
  }


  handleSubmit = event => {
   event.preventDefault()

   if (!this.state.username || !this.state.password) return  //made so it can't be blank

   this.props.onSubmit(this.state)
 }



  render() {
    console.log("loginform", this.props)
    return (
      <form onSubmit={(event)=>this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username"  type="text" onChange={this.usernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password"  type="password" onChange={this.passwordChange} />
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
