import React from 'react';

const AddTaskForm = (props) => {
    let title , dueDate = null;
    let referenceMemberId = props.memberId;
    return (
      <form onSubmit={e => {
            e.preventDefault();
            let taskObject = {
              refMemberId: referenceMemberId,
              title: title.value,
              status: false,
              dueDate: dueDate.value
            };
            props.submitTask(taskObject);
            e.target.reset();
          }}
            className="form-horizontal m-t-15"
      >
        <div className="form-group">
          <label className="col-sm-4 control-label">Title: </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="taskTitle"
              ref={node => title = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <label className="col-sm-4 control-label">Due Date: </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="taskDueDate"
              ref={node => dueDate = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <div className="col-sm-offset-4 col-sm-8">
            <input type="submit" className="btn btn-default"/>
          </div>
        </div>
      </form>
    );
};

export default AddTaskForm;
