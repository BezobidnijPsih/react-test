import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from './UserActions';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      lastUpdated: 'good luck',
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    const {users, isFetching, lastUpdated} = this.props;
    return <p>This is the users page.</p>;
  }
}

const mapStateToProps = state => {
  debugger;
  return state;
};

export default connect(mapStateToProps)(UserList);
