import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      charactersRemaining: 140
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      charactersRemaining: 140 - event.target.value.length
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={ event => this.changeHandler(event)}/> {this.state.charactersRemaining} Characters remaining
      </div>
    );
  }
}

export default TwitterMessage;
