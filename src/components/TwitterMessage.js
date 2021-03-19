import React from "react"

class TwitterMessage extends React.Component {
  constructor() {
    super()
    this.state = { message: '' }
  }

  handleChange = (e) => {
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={e => this.handleChange(e)}
          value={this.state.message}
          placeholder={this.props.maxChars + ' characters max'}
        />
        <small>
          <i>
            &nbsp;{this.props.maxChars - this.state.message.length}
          </i>
        </small>
      </div>
    )
  }
}

export default TwitterMessage
