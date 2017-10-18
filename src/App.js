import React, {Component} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import {Row, Col, Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col sm={3}>
              <Menu />
            </Col>
            <Col sm={7}>
              <Content />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
