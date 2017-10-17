import React, {Component} from 'react';
import styled from 'styled-components';
import GrommetHeader from 'grommet/components/Header';

class Header extends Component {
  render() {
    const Header = styled(GrommetHeader)`
      background: #4e5d6c !important;
    `;
    return (
      <Header colorIndex="grey-3" size="small">
        !
      </Header>
    );
  }
}

export default Header;
