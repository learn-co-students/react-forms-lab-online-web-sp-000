import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      characters: props.maxChars
    };
  }
handleChange = e => {
  this.setState({
    message: e.target.value,
    characters: this.props.maxChars - e.target.value.length
  })
  // console.log('TwitterMessage -> characters', characters);
  // console.log('TwitterMessage -> e.target.value', e.target.value);
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        value={this.state.change}
        onChange={e => this.handleChange(e)} 
        maxchars="280" 
        type="text" 
        name="message" 
        id="message" />
        <span>you have {this.state.characters} Characters Remaining</span>
      </div>
    );
  }
}

export default TwitterMessage;
