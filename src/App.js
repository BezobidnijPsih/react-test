import React, {Component} from 'react';
import {routes} from './Routes';
import {Switch, Route} from 'react-router-dom';

import styled from 'styled-components';
import 'grommet-css';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import AppUI from 'grommet/components/App';

import NavSidebar from './components/NavSidebar';

class App extends Component {
  render() {
    const Container = styled(Box)`
      background: #2b3e50;
    `;
    return (
      <AppUI centered={false}>
        <Container full={true}>
          <Split flex="right">
            <NavSidebar />
            <Switch>
              {routes.map(route => {
                if (route.path === '/') {
                  return (
                    <Route
                      exact
                      path="/"
                      component={route.component}
                      key={route.key}
                    />
                  );
                } else {
                  return (
                    <Route
                      path={route.path}
                      component={route.component}
                      key={route.key}
                    />
                  );
                }
              })}
            </Switch>
          </Split>
        </Container>
      </AppUI>
    );
  }
}

export default App;
