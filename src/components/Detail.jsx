import React from 'react';
// import PropTypes from 'prop-types';
import ajax from 'superagent';
import {Button, Panel, PanelHeader, Row, Col} from 'react-bootstrap';

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
      <Row>
        {this.renderPanels()}
        {this.renderButtons()}
      </Row>
    );
  }

  renderButtons() {
    return (
      <Col sm={1}>
        <Button onClick={this.buttonClicked}>Click me</Button>
      </Col>
    );
  }

  renderPanels() {
    return (
      <Col sm={11}>
        {this.state.commits.map((commit, index) => (
          <Panel key={index} header={commit.author.login} bsStyle="primary">
            <a href={commit.html_url}>{commit.commit.message}</a>
          </Panel>
        ))}
      </Col>
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
