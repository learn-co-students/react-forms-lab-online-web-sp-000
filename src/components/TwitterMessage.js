import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
			message: "",
			maxChars: props.maxChars
		};
  }

	handleChange = event => {
		this.setState({
			message: event.target.value
		})
	}

	charsRemaining = () => {
		return this.state.maxChars - this.state.message.length
	}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
				<br></br>
				Character(s) remaining: {this.charsRemaining()}
      </div>
    );
  }
}

export default TwitterMessage;
