import React from "react";

// class TwitterMessage extends React.Component {
//   constructor(props) {
//     super();
//
//     this.state = {
//       maxChars: props.maxChars,
//       charsLeft: props.maxChars
//     };
//   }
//
//
//   remainingCharacters = event => {
//     // console.log(event.target.value.length)
//     // could not directly pass event.target.value.length into setState
//     // this is due to event pooling -
//     // meaning once the the event is finished, all the event fields are nullified. Since setState is asynchronous, there is no such thing as event inside it.
//     // both below solutions have been tested and worked.
//     // this is solved via event.persist() or
//     // let charsUsed = event.target.value.length
//     // => then pass in charsUsed in the setState()
//     event.persist()
//     this.setState(prevState => {
//       return {
//         charsLeft: prevState.maxChars - event.target.value.length
//       }
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <strong>Your message:</strong>
//         <input type="text" name="message" id="message" onChange={this.remainingCharacters}/>
//         <p>{this.state.charsLeft}/{this.state.maxChars} characters used</p>
//       </div>
//     );
//   }
// }

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
