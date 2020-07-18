import React from 'react'
import {Button,Col,Form,Table} from 'react-bootstrap'

function Search({formHandler,search,searchHandler}) {
  return (
    <>
    <Form onSubmit={searchHandler()}>
      <Form.Row className="justify-content-md-center">
        <Col xs="6">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Query
          </Form.Label>
          <Form.Control
            placeholder="Search Movie"
            name="query"
            onChange={formHandler()}
            value={search.form.query}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" disabled={search.isLoading}>Submit</Button>
        </Col>
      </Form.Row>
    </Form>
    {search.data.Search.length > 0 && (
      <Table responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>ImDB ID</th>
          </tr>
        </thead>
        <tbody>
          {search.data.Search.map(v => (
            <tr key={v.imdbID}>
              <td>{v.Title}</td>
              <td>{v.Year}</td>
              <td>{v.imdbID}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
    </>
  )
}

export default Search