import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {routes} from './Routes';

export class Content extends Component {
  render() {
    return (
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
    );
  }
}

export default Content;
