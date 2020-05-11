import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '', 
      maxlength: this.props.maxChars,
      remainingChars: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value, 
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    console.log(this.state.inputValue)
    return (
      <React.Fragment>
        <div>
          <strong>Your message:</strong>
          <input type="text" name="message" id="message" value={this.state.inputValue} onChange={this.handleChange}/>
          {/* Is there a maximum length for an input in a React form. 
          Need to put that here and assign it the prop value */}
        </div>
        <p>{this.state.remainingChars}</p>
      </React.Fragment>
      // to show the number of remaining characters available, 
      // need to call a method here that takes the maxChars prop and 
      // subtracts the length of the input value string
    );
  }
}

export default TwitterMessage; 