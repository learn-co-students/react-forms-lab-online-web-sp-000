import React from "react"
import { PropTypes } from "prop-types"

class TwitterMessage extends React.Component {
  state = { newTweet: "" }

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          id="username"
          type="text"
          name="username"
          value={this.state.newTweet}
          onChange={this.handleInputChange}
        />
        <p>{this.props.maxChars - this.state.newTweet.length}</p>
      </div>
    )
  }
}
TwitterMessage.defaultProps = {
  maxChars: 140
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number
}
export default TwitterMessage
