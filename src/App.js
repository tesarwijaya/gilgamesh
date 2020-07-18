import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'

import Movie from './pages/Movie'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Movie />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
