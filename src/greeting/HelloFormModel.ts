import {Button, Form, FormModel, GroupBox, StringField} from '@eclipse-scout/core';

export default ():FormModel => ({
  id: 'HelloForm',
  objectType: Form,
  displayHint: Form.DisplayHint.VIEW,
  modal: false,
  rootGroupBox: {
    id: 'MainBox',
    objectType: GroupBox,
    borderDecoration: GroupBox.BorderDecoration.EMPTY,
    fields: [
      {
        id: 'NameField',
        objectType: StringField,
        label: 'Name'
      },
      {
        id: 'GreetButton',
        objectType: Button,
        label: 'Say Hello',
        keyStroke: 'enter',
        processButton: false
      }
    ]
  }
})

export type HelloFormWidgetMap = {
  'HelloForm': Form;
  'MainBox': GroupBox;
  'NameField': StringField;
  'GreetButton': Button;
};
