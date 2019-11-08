import React from 'react';
import { TableNormal, TableAlternateRowColor } from '../src/components/tableElement';

export default {
  component: {TableNormal, TableAlternateRowColor},
  title: 'Table',
};

//Default Table
export const Table = () => <TableNormal />;

//Default Table Alternate
export const TableAlternateRow = () => <TableAlternateRowColor />;