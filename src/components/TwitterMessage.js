import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      message: "",
      charsLeft: props.maxChars
    };
  }

  msgHandler = (event) =>{
   
    this.setState({
      [event.target.name]: event.target.value,
      charsLeft: this.state.maxChars - event.target.value.split("").length,
    })
   
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.msgHandler(event)} value={this.state.message}/>
      <div>{this.state.charsLeft}</div>
      </div>
    );
  }
}

export default TwitterMessage;
