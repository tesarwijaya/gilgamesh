import React from 'react'
import {Tab, Tabs} from 'react-bootstrap'

import Search from './search'

function Movie(props) {
  return (
    <Tabs defaultActiveKey="search">
      <Tab eventKey="search" title="Search">
        <Search {...props}/>
      </Tab>
      <Tab eventKey="favorite" title="Favorite">
        Content
      </Tab>
    </Tabs>
  )
}

export default Movie