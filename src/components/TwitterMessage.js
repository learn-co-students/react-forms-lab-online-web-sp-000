import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) { //takes one prop 
    super(props);

    this.state = {
      inputValue: '', 
      maxlength: this.props.maxChars, //maxChars = prop (maximum amount of characteres a message can have)
      remainingChars: this.props.maxChars //being passed in from app component
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value, 
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  //input type controlled component 
  //change on every input 
  //show remaining characters 
  render() {
    console.log(this.state.inputValue)
    return (
      <React.Fragment>
        <div>
          <strong>Your message:</strong> 
          <input type="text" name="message" id="message" value={this.state.inputValue} onChange={this.handleChange}/>
        </div>
        <p>{this.state.remainingChars}</p> 
      </React.Fragment>
    );
  }
}

export default TwitterMessage; 