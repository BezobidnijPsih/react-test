import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {routes} from './../Routes';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Menu extends Component {
  render() {
    const MenuLink = styled(Link)`
      &:hover {
        text-decoration: none;
      }
    `;
    return (
      <ListGroup>
        {routes.filter(route => route.mainMenuLabel).map(route => (
          <ListGroupItem key={route.key}>
            <MenuLink to={route.path}>{route.mainMenuLabel}</MenuLink>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default Menu;
