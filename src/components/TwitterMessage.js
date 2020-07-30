import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""

    };
 
  }
  
  handleMaxChars = event => {
    this.setState ({
      message: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
         Total charecters available:{this.props.maxChars}<br></br>
         Remaning charecters available:{this.props.maxChars-this.state.message.length} 
      </div>
    );
    // we are  subtract number of maxChars to message what user type to see reamaning charceters number on DOM 
  }
}

export default TwitterMessage;
