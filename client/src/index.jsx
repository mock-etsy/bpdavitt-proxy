import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Row, Navbar } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div id="navpane"></div>
        <Row>
          <Col sm={8}>
            <div id="carousel-container"></div>
            <div id="reviews"></div>
          </Col>
          <Col sm={4}>
            <div id="listing"></div>

          </Col>
        </Row>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('regretsy'));