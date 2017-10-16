import React from 'react';
// import PropTypes from 'prop-types';
import ajax from 'superagent';
import {Button, Container, Panel, PanelHeader, Row, Column} from 'rebass';

class Detail extends React.Component {
  buttonClicked() {
    console.log('Button was clicked!');
  }
  constructor(props) {
    super(props);
    this.state = {commits: []};
  }

  render() {
    return (
      <Container>
        <Row>
          {this.renderPanels()}
          {this.renderButtons()}
        </Row>
      </Container>
    );
  }

  renderButtons() {
    return (
      <Column width={1 / 2}>
        <Button onClick={this.buttonClicked}>Click me</Button>
      </Column>
    );
  }

  renderPanels() {
    return (
      <Column width={1 / 2}>
        {this.state.commits.map((commit, index) => (
          <Panel key={index} color="blue" mt={10}>
            <PanelHeader bg="blue" color="white">
              {commit.author.login}
            </PanelHeader>:
            <a href={commit.html_url}>{commit.commit.message}</a>
          </Panel>
        ))}
      </Column>
    );
  }

  componentWillMount() {
    ajax
      .get('https://api.github.com/repos/facebook/react/commits')
      .then(response => {
        this.setState({commits: response.body});
      })
      .catch(error => {
        console.log('There was an error fetching from GitHub', error);
      });
  }
}

// Detail.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Detail;
