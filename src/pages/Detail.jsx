import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonOutline, Container} from 'rebass';

class Detail extends React.Component {
  buttonClicked() {
    console.log('Button was clicked!');
  }

  render() {
    return (
      <Container>
        <p>Hello, {this.props.message}!</p>
        <ButtonOutline children="Hello" />
        <Button onClick={this.buttonClicked}>Click me</Button>
      </Container>
    );
  }
}

Detail.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Detail;
