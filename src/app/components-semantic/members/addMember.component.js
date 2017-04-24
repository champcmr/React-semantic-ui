import React from 'react';
import AddMemberForm from './addMemberForm';
import {browserHistory} from 'react-router';

import {Header, Segment} from 'semantic-ui-react';

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
            <div className="container-fluid">
                <Header as='h2' attached='top'>
                    Add Member Form
                </Header>
                <Segment attached>

                    <div>  {AddMemberForm()}</div>
                </Segment>
            </div>
        );
    }
}