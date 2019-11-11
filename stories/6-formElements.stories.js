import React from 'react';
import { InputLabel, InputField, InputTextArea } from '../src/components/formElements';
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

storiesOf("Form elements", module)
  .add("Input text", () => <div className="box"><InputLabel labelFor="userName" labelText={text("labelText", "Username")} /> 
  <InputField inputType="text" inputID="userName" /></div>,
  {
    notes: "Input label and input text field."
  })
  
  .add("Input password", () => <div className="box"><InputLabel labelFor="InpPassword" labelText={text("labelText", "Password")} /> 
  <InputField inputType="password" inputID="InpPassword" /></div>,
  {
    notes: "Input label and input password field."
  })
    
  .add("Textarea", () => <div className="box"><InputLabel labelFor="InpAddress" labelText={text("labelText", "Address")} />
  <InputTextArea textID="InpAddress" />
  </div>,
  {
    notes: "Address textarea."
  });


