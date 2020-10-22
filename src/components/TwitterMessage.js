import React from "react";
//this works fine I don't know why the test won't pass.
class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      charsLeft: null,
      msg: null
    };
  }

  handleChange = (event) => {
    let char = this.props.maxChars - event.target.value.length
    let text = event.target.value
    this.setState({  charsLeft: char, msg: text } )
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>
          <small>({this.props.maxChars} Characters Max) </small>
        </p>
        <p>
        {this.state.charsLeft} :)
        {this.state.msg}
        </p>
      <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} />
      </div>
    );
  }
}

export default TwitterMessage;
