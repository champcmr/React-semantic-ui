import React from 'react';
import { browserHistory } from 'react-router';

import { Button,  Header, Segment } from 'semantic-ui-react';
import Form from 'react-jsonschema-form';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        console.log('MemberId: ', this.props.params.memberId);
    }

    saveTask(newTaskObj) {
        newTaskObj.refMemberId = this.props.params.memberId;
        newTaskObj.status = false;
        console.log('New Task: ', newTaskObj);
        this.props.addNewTask(newTaskObj);
        browserHistory.push('/task-list/' + newTaskObj.refMemberId);
    }

    render() {
        const taskSchema = {
            // "title": "MemberForm",
            // "description": "An Input Member Form.",
            "type": "object",
            "required": [
                "title",
                "dueDate"
            ],
            "properties": {
                "title": {
                    "type": "string",
                    "title": "Task Title",
                },
                "dueDate": {
                    "type": "string",
                    "title": "Due Date",
                    "format": "date"
                }
            }
        }

        const taskUiSchema = {
            "title": {
                "ui:autofocus": true,
                "ui:emptyValue": ""
            },
            "dueDate": {
                "ui:widget": "alt-date"
            }
        }

        return (
            <div className="container">
                <Header as='h2' attached='top'>
                    Add Task Form
                </Header>
                <Segment attached>
                    <h3 className="p-0 m-0 page-header"></h3>
                    <Form schema={taskSchema}
                        uiSchema={taskUiSchema}
                        onSubmit={(data) => {
                            this.saveTask(data.formData);
                        }}
                    >
                        <div>
                            <Button type="submit">Submit Task</Button>
                        </div>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default AddTask;