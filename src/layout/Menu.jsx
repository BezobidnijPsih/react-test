import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {routes} from '../app/Routes';
import styled from 'styled-components';
import {LinkContainer} from 'react-router-bootstrap';

class Menu extends Component {
  render() {
    return (
      <ListGroup>
        {routes.filter(route => route.mainMenuLabel).map(route => (
          <LinkContainer
            exact
            to={route.path}
            key={route.key}
            className="list-group-item">
            <a>{route.mainMenuLabel}</a>
          </LinkContainer>
        ))}
      </ListGroup>
    );
  }
}

export default Menu;
