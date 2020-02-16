import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: " "
    };
  }

  handleInputChange = (e) =>{
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange = {(e)=>this.handleInputChange(e)} value = {this.state.inputValue}/>
      </div>
    );
  }
}

export default TwitterMessage;
