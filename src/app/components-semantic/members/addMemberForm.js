import React from 'react';
import {Button, Input, Select} from 'semantic-ui-react';

import {Form} from 'react-jsonschema-form';

const AddMemberForm = (props) => {

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ];

  const schema = {
    "title": "MemberForm",
    "description": "A simple form example.",
    "type": "object",
    "required": [
      "firstName",
      "lastName"
    ],
    "properties": {
      "firstName": {
        "type": "string",
        "title": "First name"
      },
      "lastName": {
        "type": "string",
        "title": "Last name"
      },
      "email": {
        "type": "string",
        "format": "email"
      },
      "radio": {
          "type": "boolean",
          "title": "Gender",
          "description": "This is the radio-description"
      }
    }
  }

  const uiSchema = {
    "firstName": {
      "ui:autofocus": true,
      "ui:emptyValue": ""
    },
    "firstName": {
      "ui:emptyValue": ""
    },
    "email":{
      "ui:emptyValue": ""
    },
    "boolean": {
      "radio": {
        "ui:widget": "radio"
      } 
    },
    // "date": {
    //   "ui:widget": "alt-datetime"
    // }
  }


  let firstName, lastName, email, gender = null;

  const onsubmit = (formData) =>{
    console.log('FormData: ',formData);
  }
  
  return (

    <Form schema={schema}
          uiSchema={uiSchema}
          onSubmit={onsubmit}>  
    </Form>

    
  );
};

export default AddMemberForm;
