import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.changeHandler} value={this.state.message}/>
          <div>{charNumber} Characters</div>
      </div>
    );
  }
}

export default TwitterMessage;
