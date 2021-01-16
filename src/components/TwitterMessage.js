import React from "react"

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: props.maxChars,
      message: ''
    }
  }

  handleChange = (event) => {
    // event.preventDefault()
    // console.log(event.target.value)
    // // this.setState(previousState => {
    // this.setState((previousState, event) => ({
    //      message: event.target.value,
    //     remainingChars: previousState.remainingChars - event.target.value.length
    //   })
    //   )
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <h2>Remaining Chars: {charNumber}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
