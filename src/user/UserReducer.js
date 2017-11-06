import {RECEIVE_USERS, REQUEST_USERS} from './UserActions';

const userReducer = (
  state = {
    isFetching: false,
    users: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.users,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
};

export default userReducer;
