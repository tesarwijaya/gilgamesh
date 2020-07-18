import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

import Favorite from './favorite'
import Search from './search'

function Movie(props) {
  return (
    <Tabs defaultActiveKey="search" style={{ marginTop: 32 }}>
      <Tab eventKey="search" title="Search">
        <Search {...props} />
      </Tab>
      <Tab eventKey="favorite" title="My Favorite">
        <Favorite {...props} />
      </Tab>
    </Tabs>
  )
}

export default Movie
