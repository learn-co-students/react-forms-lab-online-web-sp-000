import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    //if(e.target.value.length <= 140){
      this.setState({
        message: e.target.value
      })
    //}
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <label>{140 - this.state.message.length} characters remaining</label>

      </div>
    );
  }
}

export default TwitterMessage;
