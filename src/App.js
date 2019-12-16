import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {
  // state = {
  //   username: "",
  //   password: ""
  // }

  login = (event, { username, password }) => {
    // event.preventDefault();
    console.log(`Logging in ${username} with password ${password}`);
    // console.log(`Logging `)
  };

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={280} />



      </div>
    )
  }
}

export default App
