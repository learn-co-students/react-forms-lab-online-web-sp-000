import React from 'react'

class TwitterMessage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      remaining: props.maxChars,
      msg: ''
    }
  }

  handleChange = e =>
    this.setState({
      msg: e.target.value,
      remaining: this.props.maxChars - e.target.value.length
    })

  render () {
    return (
      <div>
        <strong>Your message ({this.state.remaining} remaining):</strong>
        <input
          onChange={this.handleChange}
          value={this.state.msg}
          type='text'
          name='message'
          id='message'
        />
      </div>
    )
  }
}

export default TwitterMessage
