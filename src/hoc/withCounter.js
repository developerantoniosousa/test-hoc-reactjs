import React, { Component } from 'react'

export default OriginalComponent => {
  class NewComponnet extends Component {
    state = {
      count: 0
    }

    increment = () => this.setState(preState => ({ count: preState.count++ }))

    render() {
      const { count } = this.state

      return <OriginalComponent count={count} increment={this.increment} {...this.props} />
    }
  }

  return NewComponnet
}