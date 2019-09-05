import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }


  handleMessageChange  = event => {
      this.setState({
      value: event.target.value
    }, () => {(this.state.value)});

  }



  render() {
    return (
  
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message"
        value={this.state.value} 
        onChange={this.handleMessageChange} />

        <p> Characters left: {this.props.maxChars -  this.state.value.length} </p>
      </div>
     
    );
  }
}

export default TwitterMessage;
