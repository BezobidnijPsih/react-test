import React, {Component} from 'react';

import styled from 'styled-components';
import Sidebar from 'grommet/components/Sidebar';
// import Header from 'grommet/components/Header';
// import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
// import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
// import CloseIcon from 'grommet/components/icons/base/Close';

import {routes} from './../Routes';

class NavSidebar extends Component {
  render() {
    const MenuContainer = styled(Sidebar)`
      background: #4e5d6c !important;
    `;

    return (
      <MenuContainer colorIndex="grey-3" size="small">
        <Menu primary={true}>
          {routes
            .filter(route => route.mainMenuLabel)
            .map(route => (
              <Anchor
                icon={<route.mainMenuIcon />}
                key={route.key}
                label={route.mainMenuLabel}
                path={{path: route.path, index: route.path === '/'}}
              />
            ))}
        </Menu>
      </MenuContainer>
    );
  }
}

export default NavSidebar;
