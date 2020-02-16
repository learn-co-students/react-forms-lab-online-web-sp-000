import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    
    
  }

<<<<<<< HEAD
=======
    this.state = {
      inputValue: " "
    };
  }

>>>>>>> origin
  handleInputChange = (e) =>{
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    let number = this.props.maxChars - this.state.inputValue.length;
    return (  
      <div>     
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange = {(e)=>this.handleInputChange(e)} value = {this.state.inputValue}/>
<<<<<<< HEAD
        {number}
=======
>>>>>>> origin
      </div>
    );
  }
}

export default TwitterMessage;
