import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
handleChange = e => {
  this.setState({
    message: e.target.value,
    characters: this.props.maxChars - e.target.value.length
  })
  // console.log('TwitterMessage -> characters', characters);
  console.log('TwitterMessage -> e.target.value', e.target.value);
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        value={this.state.change}
        onChange={e => this.handleChange(e)} 
        type="text" 
        name="message" 
        id="message" />
        <pre>{this.state.characters} Characters Remaining</pre>
      </div>
    );
  }
}

export default TwitterMessage;
