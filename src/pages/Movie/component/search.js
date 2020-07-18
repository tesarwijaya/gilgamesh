import React from 'react'
import {Button,Col,Form,Table} from 'react-bootstrap'

function Search() {
  return (
    <>
    <Form>
      <Form.Row className="justify-content-md-center">
        <Col xs="6">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Query
          </Form.Label>
          <Form.Control
            placeholder="Search Movie"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Row>
    </Form>
    <Table responsive>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>ImDB ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default Search