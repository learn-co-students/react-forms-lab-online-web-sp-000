import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      counter: this.props.maxChars
    };    
  }

  handleChange(event){
    console.log("t1:", this.state.tweet)
    let n = event.target.value.length;
    let c = this.state.counter - n;
    //debugger
    this.setState({
      tweet: event.target.value,
      counter: c
    })
    console.log("counter:",this.state.counter)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={(event) => {this.handleChange(event)} } />
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
