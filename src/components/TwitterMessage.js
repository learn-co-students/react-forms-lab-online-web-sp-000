import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
    message: "",
    remaining: this.props.maxChars
  }

  handleChange = event => {    
    let rem = this.state.remaining
    this.setState({
      [event.target.name]: event.target.value,
      remaining: rem - 1
    })
    
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <h1>{this.props.maxChars}</h1>
        <h1>{this.state.remaining}</h1>      
      </div>
    );
  }
}

export default TwitterMessage;
