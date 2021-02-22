import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
       message: ""
    };
  }

  handleChange = event => {
     this.setState({
        message: event.target.value
     })
  }

  showRemainingChars = () => {
     return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
               name="message" 
               id="message" 
               max={this.props.maxChars}
               value={this.state.message}
               onChange={this.handleChange} />
         {this.showRemainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
