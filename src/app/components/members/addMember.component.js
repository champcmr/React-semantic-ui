import React from 'react';
import AddMemberForm from './addMemberForm';
import {browserHistory} from 'react-router';

export default class AddMember extends React.Component{
    constructor(props){
        super(props);
    }

    saveMember(memberObj){
       console.log('New Member: ',memberObj); 
       this.props.addNewMember(memberObj);
       browserHistory.push('/');  
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                     <div className="col-xs-6 text-left">
                        <h3 className="p-0 m-0 page-header">Add Member Form</h3>
                        <AddMemberForm submitMember={this.saveMember.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}