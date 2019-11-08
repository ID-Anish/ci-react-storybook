import React from 'react';
import { AlertElement } from '../src/components/alert';
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

storiesOf("Alert message", module)
  .add("Success", () => <AlertElement alertType="success" styleName="alert--success" alertText={text("alertText", "This is success message")} />, {
    notes: "For success message, add class name 'alert--success'."
  })
  
  .add("Error", () => <AlertElement alertType="error" styleName="alert--error" alertText={text("alertText", "This is error message")} />, {
    notes: "For error message, add class name 'alert--error'."
  })
  
  .add("Warning", () => <AlertElement alertType="warning" styleName="alert--warning" alertText={text("alertText", "This is warning message")} />, {
    notes: "For warning message, add class name 'alert--warning'."
  });


