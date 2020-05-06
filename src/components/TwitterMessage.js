import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

handleChange = e => {
  this.setState({
    value: e.target.value
    //target is the input element value
  })
}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.value} onChange ={this.handleChange}  />
                    {/* connecets state to message, when input changes call handleChange */}
                    <p> Remaining Charactter: {this.props.maxChars-this.state.value.length}</p>
                     {/* takes in the prop of maxChars from index js and subtract the the string length of state.value(user input)  */}
      </div>
    );
  }
}

export default TwitterMessage;
