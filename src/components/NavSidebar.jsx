import React, {Component} from 'react';

import styled from 'styled-components';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import CloseIcon from 'grommet/components/icons/base/Close';

import {routes} from './../Routes';

class NavSidebar extends Component {
  render() {
    const MenuContainer = styled(Sidebar)`
      background: #4e5d6c;
      color: white;
    `;

    return (
      <MenuContainer>
        <Header size="large" justify="between" pad={{horizontal: 'medium'}}>
          <Title onClick={this._onClose} a11yTitle="Close Menu">
            <span>instanceName</span>
          </Title>
          <Button icon={<CloseIcon />} plain={true} a11yTitle="Close Menu" />
        </Header>
        <Menu fill={true} primary={true}>
          {routes
            .filter(route => route.mainMenuLabel)
            .map(route => (
              <Anchor
                key={route.key}
                label={route.mainMenuLabel}
                path={route.path}
              />
            ))}
        </Menu>
      </MenuContainer>
    );
  }
}

export default NavSidebar;
