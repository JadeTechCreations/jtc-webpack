import React from 'react';
import {blah,blah2} from 'react2';
import {Text, Checkbox, File, Button, Select, Form} from 'component';

export default React.createClass({
  render() {
    const sayIt = blah();
    return (
      <div>
        <Text name="Chris"/>
        <Checkbox name="Chris"/>
        <File name="Chris"/>
        <Button name="Chris"/>
        <Select name="Chris"/>
        <Form name="Chris"/>
      </div>
    )
  }
})
