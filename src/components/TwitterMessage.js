import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      inputVal: "" 
    };
  }

  handleChange = e => {
    const message = e.target.value
    this.setState({
      inputVal: message
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        id="message"
        type="text" 
        name="message"  
        value={this.state.inputVal}
        onChange={event => this.handleChange(event) } 
        />
        <small> 
          Characters remaining: {this.props.maxChars - this.state.inputVal.length}
        </small>
      </div>
    );
  }
}

export default TwitterMessage;
