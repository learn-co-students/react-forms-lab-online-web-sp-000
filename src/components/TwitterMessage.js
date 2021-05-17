import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {max: props.maxChars,
                  value: "",
                  length: 0
                };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value,
                   length: event.target.value.length
                  })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
         onChange = {event => this.handleChange(event)}
         value= {this.state.value}/>
         <p>Characters left: {this.state.max - this.state.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
