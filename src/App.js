import React, {Component} from 'react';
import {Provider, Heading} from 'rebass';
import Detail from './pages/Detail';

class App extends Component {
  render() {
    return (
      <Provider>
        <Heading>Hello</Heading>
        <Detail message={'message!'} />
      </Provider>
    );
  }
}

export default App;
