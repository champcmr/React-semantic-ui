import { connect } from 'react-redux';
import Tasks from '../../components-semantic/tasks/tasks.component';
import * as taskAction from '../../actions/taskAction';


const mapStateToProps = (state, ownProps) => {
  console.log('TaskContainer mapStateToProps: ',state);
  return {
    // selectedMember : state.members.map((memberObj)=>{
    //   if(memberObj._id===state.ta)
    // }),
    tasksList: state.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasksList: function(memberId){
      dispatch(taskAction.fetchTasks(memberId));
    },
    deleteTask : function(removeTask){
      dispatch(taskAction.deleteTask(removeTask));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
