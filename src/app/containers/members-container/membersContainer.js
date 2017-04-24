import { connect } from 'react-redux';
import Members from '../../components-semantic/members/members.component';
import * as memberAction from '../../actions/memberAction';


const mapStateToProps = (state, ownProps) => {
  return {
    membersList: state.members
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMembersList : function () {
      dispatch(memberAction.fetchMembers());
    },
    deleteMember : function(removeMember){
      dispatch(memberAction.deleteMember(removeMember));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Members);
