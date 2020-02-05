import React from "react";

class TwitterMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            message: ''
        };
    }

    // handleInputChange = (e) => {
    //     this.setState({
    //         message: e.target.value
    // }

    render() {
        return (
        <div>
            <strong>Your message:</strong>
            <input onChange={event => this.setState({message: event.target.value})} value={this.state.message} type="text" name="message" id="message" /><br />
            {this.props.maxChars - this.state.message.length}
        </div>
        );
    }
}

export default TwitterMessage;

// <input onChange={e => this.handleInputChange(e)} value={this.state.message} type="text" name="message" id="message" />
