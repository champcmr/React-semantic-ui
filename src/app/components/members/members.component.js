import React from 'react';
import {browserHistory} from 'react-router';
import * as memberAction from '../../actions/memberAction';



export default class Members extends React.Component {
    constructor(props) {
        super(props);
        console.log('called Member constructor', props);
    }

    componentDidMount() {
    }

    componentWillMount() {
         this.loadMembers(); 
    }

    loadMembers() {
        let {getMembersList} = this.props;
        getMembersList();
    }

    viewTask(memberId){
        browserHistory.push('/task-list/' + memberId);
    }

    removeMember(member){
        console.log('Delete members',member);
        this.props.deleteMember(member);
    }

    memberData = () => {
       return this.props.membersList.map((member) => {
            return (
                <tr key={member._id} >
                    <td>{member.firstName}</td>
                    <td>{member.lastName}</td>
                    <td>{member.email}</td>
                    <td>{member.gender}</td>
                    <td>
                        <div className="btn-group">
                            <button type="button" onClick={() => {this.viewTask(member._id)}} className="btn btn-sm btn-primary">
                                <span className="glyphicon glyphicon-edit"></span></button>
                            <button type="button" onClick={()=>{this.removeMember(member)}} className="btn btn-sm btn-danger">
                                <span className="glyphicon glyphicon-trash"></span></button>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 text-left">
                        <h3 className="p-0 m-0 page-header">Members List</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12"> 
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.memberData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     membersList: state.members
//   }
// };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     createBook: book => dispatch(bookActions.createBook(book))
// //   }
// // };

// export default connect(mapStateToProps)(Members);
