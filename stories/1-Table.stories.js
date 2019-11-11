import React from 'react';
import { CiTable } from '../src/components/tableElement';
import { storiesOf } from "@storybook/react";

const rows = [
    {
      id: 'a',
      field1: 'Field 1a',
      field2: 'Field 2a',
      field3: 'Field 3a'
    },
    {
      id: 'b',
      field1: 'Field 1b',
      field2: 'Field 2a',
      field3: 'Field 3a'
    },
    {
      id: 'c',
      field1: 'Field 1c',
      field2: 'Field 2a',
      field3: 'Field 3a'
    },
    {
      id: 'd',
      field1: 'Field 1d',
      field2: 'Field 2a',
      field3: 'Field 3a'
    }
    ,
    {
      id: 'e',
      field1: 'Field 1e',
      field2: 'Field 2a',
      field3: 'Field 3a'
    }
  ];

  const rowClass = "table--column table--row-divider";
storiesOf("Data Table", module)
  .add("Default", () => <CiTable tableClass="table--striped-horizontal" rowClass="" headerClass="" data={rows}/>, {
    notes: "Basic Table'."
  });
  

  