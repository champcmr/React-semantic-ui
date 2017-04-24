import React  from 'react';
import {Route, IndexRoute} from 'react-router'; 

import App from './containers/appContainer';
import Members from './containers/members-container/membersContainer';
import AddMember from './containers/members-container/addMemberContainer';
import Tasks from './containers/task-container/tasksContainer';
import AddTask from './containers/task-container/addTaskContainer';

// tester();
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Members}></IndexRoute>
    <Route path="/new-member" component={AddMember} />
    <Route path="/new-task/:memberId" component={AddTask}/>
    <Route path="/task-list/:memberId" component={Tasks}/>
  </Route>
)