import React from 'react';
import { Provider } from 'react-redux'
import {Container, Col, Row} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import initStore from './redux'

import Movie from './pages/Movie'

const store = initStore({})

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Movie />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
