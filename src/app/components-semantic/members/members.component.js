import React from 'react';
import {browserHistory} from 'react-router';
import * as memberAction from '../../actions/memberAction';

import {Header, Button, Table} from 'semantic-ui-react';

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
                <Table.Row key={member._id}>
                        <Table.Cell>{member.firstName}</Table.Cell>
                        <Table.Cell>{member.lastName}</Table.Cell>
                        <Table.Cell>{member.email}</Table.Cell>
                        <Table.Cell>{member.gender}</Table.Cell>
                        <Table.Cell>
                             <Button.Group>
                                <Button icon="file" positive compact onClick={() => {this.viewTask(member._id)}} ></Button>
                                <Button icon="trash" negative compact onClick={()=>{this.removeMember(member)}}></Button>
                            </Button.Group>
                        </Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <Header color='grey' size='medium'>Members List</Header>    
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Firstname</Table.HeaderCell>
                            <Table.HeaderCell>Lastname</Table.HeaderCell>
                            <Table.HeaderCell>E-mail address</Table.HeaderCell>
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>                        
                        {this.memberData()}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}
