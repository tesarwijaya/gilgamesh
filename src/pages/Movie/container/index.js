import React from 'react'

import Component from '../component'

class Container extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Component {...this.props} />
    )
  }
}

export default Container
