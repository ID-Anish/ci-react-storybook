import React from 'react';
import { ButtonElement } from '../src/components/button-storybook';

export default {
  component: ButtonElement,
  title: 'Button',
};

//Default Button
export const Default = () => <ButtonElement btnType="button" styleName="btn--default mr-2" btnText="Default Button" />;

//Primary Button
export const Primary = () => <ButtonElement btnType="button" styleName="btn--primary mr-2" btnText="Primary Button" />;

//Secondary Button
export const Secondary = () => <ButtonElement btnType="button" styleName="btn--secondary mr-2" btnText="Secondary Button" />;

//Secondary Button
export const Link = () => <ButtonElement btnType="button" styleName="btn--link mr-2 p-0" btnText="Link Button" />;

