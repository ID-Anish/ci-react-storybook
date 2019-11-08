import React from 'react';
import { BadgeElement } from '../src/components/badge';
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

storiesOf("Badge", module)
  .add("Default", () => <BadgeElement badgetType="default" styleName="badge--default mr-1" badgeText={text("badgeText", "default")} />, {
    notes: "For default badge, add class name 'badge--default'."
  })
  
  .add("Primary", () => <BadgeElement badgetType="primary" styleName="badge--primary mr-1" badgeText={text("badgeText", "primary")} />, {
    notes: "For primary badge, add class name 'badge--primary'."
  })
  
  .add("Error", () => <BadgeElement badgetType="error" styleName="badge--error mr-1" badgeText={text("badgeText", "error")} />, {
    notes: "For error badge, add class name 'badge--error'."
  })
  
  .add("Warning", () => <BadgeElement badgetType="warning" styleName="badge--warning mr-1" badgeText={text("badgeText", "warning")} />, {
    notes: "For warning badge, add class name 'badge--warning'."
  })
  
  .add("Success", () => <BadgeElement badgetType="success" styleName="badge--success mr-1" badgeText={text("badgeText", "success")} />, {
    notes: "For success badge, add class name 'badge--success'."
  });


