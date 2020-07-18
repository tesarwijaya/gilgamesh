import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'

import Search from './search'

function Movie() {
  return (
    <Tabs defaultActiveKey="search">
      <Tab eventKey="search" title="Search">
        <Search />
      </Tab>
      <Tab eventKey="favorite" title="Favorite">
        Content
      </Tab>
    </Tabs>
  )
}

export default Movie