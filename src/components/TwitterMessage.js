import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleOnChange = event => {
    if (event.target.value.length < this.props.maxChars){
      this.setState({
        [event.target.name]: event.target.value
       })
    }
     
      
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleOnChange}/>
        <h2>Character Remaining: {this.props.maxChars - this.state.message.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
