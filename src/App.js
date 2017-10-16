import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import NavSidebar from './components/NavSidebar';
import 'grommet-css';
import styled from 'styled-components';
import AppUI from 'grommet/components/App';
import {routes} from './Routes';
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
              {routes.map((route, index) => {
                if (route.path === '/') {
                  return <Route exact path="/" component={route.component} />;
                } else {
                  return (
                    <Route path={route.path} component={route.component} />
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
