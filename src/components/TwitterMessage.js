import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message:'',
      remainings:props.maxChars
    };
  }
  handeChange=(e)=>{
    this.setState({
      message:e.target.value,
      remainings:this.state.remainings-e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handeChange} type="text" name="message" id="message" value={this.state.message}/>
        <h5>{this.state.remainings} character remaining</h5>
      </div>
    );
  }
}

export default TwitterMessage;
