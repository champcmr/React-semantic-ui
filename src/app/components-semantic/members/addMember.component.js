import React from 'react';

import {browserHistory} from 'react-router';

import { Header, Segment, Button, Input, Select } from 'semantic-ui-react';

import Form from 'react-jsonschema-form';

class AddMember extends React.Component {

    constructor(props) {
        super(props);
    }

    saveMember(memberObj) {
        console.log('New Member: ', memberObj);
        this.props.addNewMember(memberObj);
        browserHistory.push('/');
    }

    render() {
        const schema = {
            // "title": "MemberForm",
            // "description": "An Input Member Form.",
            "type": "object",
            "required": [
                "firstName",
                "lastName",
                "email",
                "gender"
            ],
            "properties": {
                "firstName": {
                    "type": "string",
                    "title": "First name",
                },
                "lastName": {
                    "type": "string",
                    "title": "Last name"
                },
                "email": {
                    "type": "string",
                    "format": "email"
                },
                "gender": {
                    "type": "string",
                    "title": "Gender",
                    "enum": [
                        'male',
                        'female'
                    ]
                },
            }
        }

        const uiSchema = {
            "firstName": {
                "ui:autofocus": true,
                "ui:emptyValue": ""
            },
            "lastName": {
                "ui:emptyValue": ""
            },
            "email": {
                "ui:emptyValue": ""
            },
            "gender": {
                "ui:widget": "radio",
                "ui:options": {
                    "inline": true
                }
            }
        }


        return (
            <div className="container-fluid">
                <Header as='h2' attached='top'>
                    Add Member Form
                </Header>
                <Segment attached>
                    <Form schema={schema}
                        uiSchema={uiSchema}
                        onSubmit={(data) => {
                            this.saveMember(data.formData);
                        }}
                    >
                        <div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                </Segment>
            </div>
        );
    }
}


export default AddMember;