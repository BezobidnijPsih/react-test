import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import {Row, Col, Grid} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <BrowserRouter>
            <Row>
              <Col sm={3}>
                <Menu />
              </Col>
              <Col sm={7}>
                <Content />
              </Col>
            </Row>
          </BrowserRouter>
        </Grid>
      </div>
    );
  }
}

export default App;
