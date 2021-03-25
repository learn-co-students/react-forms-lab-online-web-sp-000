import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      maxChars: this.props.maxChars
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    this.setState(state => {
      return {maxChars: state.maxChars - 1}
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <h1>{this.state.maxChars}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
