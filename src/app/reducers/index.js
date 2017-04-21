// Set up your root reducer here...
import { combineReducers } from 'redux';
import {membersReducer} from './membersReducer';
import {tasksReducer} from './tasksReducer';

export default combineReducers({
  members: membersReducer,
  tasks: tasksReducer
});
