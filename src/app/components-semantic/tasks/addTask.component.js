import React from 'react';
import AddTaskForm from './addTaskForm';
import {browserHistory} from 'react-router';

export default class AddTask extends React.Component{
    constructor(props){
        super(props);
        console.log('MemberId: ',this.props.params.memberId);
    }

    saveTask(newTaskObj){
       this.props.addNewTask(newTaskObj);
       browserHistory.push('/task-list/'+newTaskObj.refMemberId);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                     <div className="col-xs-6 text-left">
                        <h3 className="p-0 m-0 page-header">Add Task Form</h3>
                        <AddTaskForm  memberId={this.props.params.memberId} submitTask={this.saveTask.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}