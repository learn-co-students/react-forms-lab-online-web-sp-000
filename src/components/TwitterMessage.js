import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      totalLeft: "",
      maxChars: ""
    };
  }

  handleOnChange=(e) =>{
    e.preventDefault()
    console.log("handlOnChange",e.target.value.length)
    let total = this.state.maxChars.length
    let totalLeft = this.props.maxChars - total
    this.setState({
      maxChars: e.target.value,
      totalLeft: totalLeft
    })

  }



  render() {
    console.log("twitterMessages props", this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name={this.props.maxChars}  onChange={this.handleOnChange}/>
        Total Characters left:{this.state.totalLeft}
      </div>
    );
  }
}

export default TwitterMessage;
