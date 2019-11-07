import React from 'react';
import { AlertElement } from '../src/components/alert';

export default {
  component: AlertElement,
  title: 'Alert message',
};

//Alert success
export const Success = () => <AlertElement alertType="success" styleName="alert--success" alertText="This is success message" />;

//Alert error
export const Error = () => <AlertElement alertType="error" styleName="alert--error" alertText="This is error message" />;

//Alert warning
export const Warning = () => <AlertElement alertType="warning" styleName="alert--warning" alertText="This is warning message" />;


