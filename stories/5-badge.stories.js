import React from 'react';
import { BadgeElement } from '../src/components/badge';

export default {
  component: BadgeElement,
  title: 'Badge',
};

//Badge Default
export const Default = () => <BadgeElement badgetType="default" styleName="badge--default mr-1" badgeText="Default" />;

//Badge Primary
export const Primary = () => <BadgeElement badgetType="primary" styleName="badge--primary mr-1" badgeText="Primary" />;

//Badge Error
export const Error = () => <BadgeElement badgetType="error" styleName="badge--error mr-1" badgeText="Error" />;

//Badge Warning
export const Warning = () => <BadgeElement badgetType="warning" styleName="badge--warning mr-1" badgeText="Warning" />;

//Badge Warning
export const Success = () => <BadgeElement badgetType="success" styleName="badge--success" badgeText="Success" />;



