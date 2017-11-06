import {combineReducers} from 'redux';
import userReducer from '../user/UserReducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
