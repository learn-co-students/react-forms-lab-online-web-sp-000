import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
    };
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form>
          
          <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
          {this.props.maxChars-this.state.message.length}

        </form>
      </div>
    );
  }
}

export default TwitterMessage;
