import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280

    };
   
    
    
    
    
  }
  
  handleMaxChars = event => {
    this.setState ({
      maxChars :this.props.maxChars - 1
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input  type="text" name="message" id="message" 
        onChange={this.handleMaxChars} />
            {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
