import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: this.props.handleLogin
    };
  }

 handleSubmit = event =>{
   event.preventDefault()
   if (this.state.username && this.state.password){
     return this.props.handleLogin(this.state)
   }
 }



  handleSignin= event =>{

    this.setState({
        [event.target.name]: event.target.value
      })
  }

  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value= {this.state.username} onChange= {event => this.handleSignin(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" type="text" value= {this.state.password} onChange={event => this.handleSignin(event)}/>
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
