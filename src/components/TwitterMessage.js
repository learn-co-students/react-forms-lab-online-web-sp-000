import React from "react";

class TwitterMessage extends React.Component {

  state = {
      maxChars: this.props.maxChars
    }
    
  

  handleChange = event => {
    event.preventDefault()
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          onChange={event => this.handleChange(event)}      
          value={this.state}
        />
      </div>
    );
  }
}

export default TwitterMessage;
