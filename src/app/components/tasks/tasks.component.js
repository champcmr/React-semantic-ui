import React from 'react';
import {browserHistory} from 'react-router';

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

    taskData = () => {
       return this.props.tasksList.map((task) => {
            return (
                <tr key={task._id} >
                    <td>
                        <input type="checkbox" value={task.status}/>
                    </td>
                    <td style={{textDecoration: task.status ? 'line-through' : 'none'}}>{task.title}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.status}</td>
                    <td>
                       <button onClick={()=>{this.removeTask(task)}} type="button" className="btn btn-sm btn-danger">
                            <span className="glyphicon glyphicon-trash"></span></button>
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
                        <h3 className="p-0 m-0 page-header">Tasks List</h3>
                    </div>
                    <div className="col-xs-6 text-right">
                        <button type="button" onClick={() => {this.openNewTaskPage(this.props.params.memberId)}} className="btn btn-primary">Add Task</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12"> 
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Due-Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.taskData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}