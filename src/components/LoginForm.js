import React from "react";
import { runInThisContext } from "vm";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.username && this.state.password ? (
      this.props.onSubmit
    ) : (
      <p> Both username and password must be entered </p>
    );
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
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

// 2. This component takes one prop: `onSubmit` which is a function — this function
//   is called when the form is being submitted.By default, this function is
// currently just includes`console.log` that will allow you to see if the form is
// functioning correctly when working in your browser.

// 3. You'll find two inputs in this component: `<input type="text">` and `<input
// type = "password" > `. Make this a controlled component by adding the necessary
// attributes to these inputs. The input values should be saved to the
// component's state, again on every change.

// 4. An example of an input would look like:

//    ```js
//   < input
// id = "test-username"
// type = "text"
// name = "username"
// value = { this.state.username }
// onChange = { this.handleInputChange }
//   />
//   ```

// 5. Remember that you can retrieve the input `name` and `value` of an
// `event.target` from the JS event.

// 6. Add the necessary event handler to the `<form>` element in order to call the `onSubmit` callback prop.

// 7. The `onSubmit` callback prop should only be called if _both_ fields are
// filled in (with any value).
