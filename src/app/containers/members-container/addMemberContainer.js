import { connect } from 'react-redux';
import AddMember from '../../components-semantic/members/addMember.component';
import * as memberAction from '../../actions/memberAction';


const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMember: member => dispatch(memberAction.saveMember(member))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddMember);
