import React, {Component} from 'react';
import {Provider, Heading, NavLink} from 'rebass';
import List from './pages/List';
import Detail from './pages/Detail';
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider>
        <Heading>
          <NavLink is={Link} to={`/detail`}>
            Detail
          </NavLink>
          <NavLink is={Link} to={`/`}>
            List
          </NavLink>
        </Heading>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
