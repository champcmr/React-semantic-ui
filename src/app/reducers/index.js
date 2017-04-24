// Set up your root reducer here...
import { combineReducers } from 'redux';
import {appReducer} from './appReducer';
import {membersReducer} from './membersReducer';
import {tasksReducer} from './tasksReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  app:appReducer,
  members: membersReducer,
  tasks: tasksReducer,
  routing: routerReducer
});
