import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: ''
    };
  }
  msgFn = event => {
    this.setState({
      msg: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text"
        //event not necessary
        onChange = {this.msgFn} 
        name="message" 
        id="message" 
        //this updates the state while typing!!!
        value={this.state.msg}/><br></br>
        characters left: {this.props.maxChars - this.state.msg.length}
      </div>
    );
  }
}

export default TwitterMessage;
