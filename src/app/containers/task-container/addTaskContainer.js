import { connect } from 'react-redux';
import AddTask from '../../components/tasks/addTask.component';
import * as taskAction from '../../actions/taskAction';


const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: task => dispatch(taskAction.saveTask(task))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddTask);
