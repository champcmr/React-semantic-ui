import React from 'react';
import {browserHistory} from 'react-router';

import {Button, Table, Header, Segment, Checkbox} from 'semantic-ui-react';

export default class Tasks extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    componentWillMount() {
        this.loadTasks(); 
    }

    loadTasks() {        
        let {getTasksList} = this.props;
        getTasksList(this.props.params.memberId);
        console.log('called loadTasks: ',this.props);
    }

    openNewTaskPage(memberId){
        browserHistory.push('/new-task/' + memberId);
    }

    removeTask(task){
        console.log('Delete task',task);
        this.props.deleteTask(task);
    }

    // toggle = (status) => this.setState({ checked: status })

    taskData = () => {
       return this.props.tasksList.map((task) => {
            return (
                <Table.Row key={task._id}>
                        <Table.Cell><Checkbox checked={this.status}/></Table.Cell>
                        <Table.Cell>{task.title}</Table.Cell>
                        <Table.Cell>{task.dueDate}</Table.Cell>
                        <Table.Cell>{task.status}</Table.Cell>
                        <Table.Cell>
                            <Button icon="trash" negative compact onClick={()=>{this.removeTask(task)}} ></Button>
                        </Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                 <Segment clearing>
                    <Header size='medium' floated='right'>
                        <Button color="blue" compact onClick={() => {this.openNewTaskPage(this.props.params.memberId)}} >Add Task</Button>
                    </Header>
                    <Header color="grey" size='medium' floated='left'>
                        Tasks List
                    </Header>
                </Segment>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Due Date</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>                        
                        {this.taskData()}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}