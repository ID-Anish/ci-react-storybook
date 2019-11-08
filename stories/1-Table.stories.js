import React from 'react';
import { TableNormal, TableAlternateRowColor } from '../src/components/tableElement';
import { storiesOf } from "@storybook/react";
// import { text } from "@storybook/addon-knobs";

storiesOf("Table", module)
  .add("Default", () => <TableNormal />, {
    notes: "Default table."
  })

  .add("Alternate color table", () => <TableAlternateRowColor />, {
    notes: "Alternate color table."
  });