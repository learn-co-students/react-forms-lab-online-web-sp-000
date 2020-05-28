import React from "react";

class TwitterMessage extends React.Component {

  state = {
      maxChars: this.props.maxChars,
      message: ""
    }
    
  

  handleChange = event => {
    if(event.target.value.length <= this.state.maxChars) {
      this.setState({
        message: event.target.value
      })
    }
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}      
          value={this.state.message}
        />
        <p>Remaining Characters: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
