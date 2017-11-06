import fetch from 'isomorphic-fetch';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

function requestUsers() {
  return {
    type: REQUEST_USERS,
  };
}

function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    users: json,
    receivedAt: Date.now(),
  };
}

export function fetchUsers() {
  return dispatch => {
    // dispatch(requestUsers());
    return fetch(
      `http://daimler-amg-messaging-stream.eu-west-1.elasticbeanstalk.com/users?next=100`
    )
      .then(response => {
        return response.json().then(json => {
          return dispatch(receiveUsers(json));
        });
      })
      .catch(err => {
        // TODO error handling
        console.log(err);
      });
  };
}
// export function loadCats() {
//   return function(dispatch) {
//     return catApi
//       .getAllCats()
//       .then(cats => {
//         dispatch(loadCatsSuccess(cats));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }
