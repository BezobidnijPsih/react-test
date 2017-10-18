import React from 'react';
import {
  Navbar,
  Nav,
  FormGroup,
  FormControl,
  Glyphicon,
  Button,
  NavDropdown,
  MenuItem,
  Dropdown,
} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
          <Navbar.Form pullRight>
            <Dropdown id="basic-nav-dropdown">
              <Dropdown.Toggle>
                <Glyphicon glyph="user" /> User
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem eventKey={1}>Profile</MenuItem>
                <MenuItem eventKey={2}>Something else</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4}>
                  <Glyphicon glyph="log-out" /> Log out
                </MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
