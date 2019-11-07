import React from 'react';
import { HeadingElement } from '../src/components/heading';

export default {
  component: HeadingElement,
  title: 'Headings',
};

//Heading one
export const headingOne = () => <HeadingElement level="1" styleName="page--heading-one" headingText="h1 - Heading one" />;

//Heading two
export const headingTwo = () => <HeadingElement level="2" styleName="page--heading-two" headingText="h2 - Heading two" />;

//Heading three
export const headingThree = () => <HeadingElement level="3" styleName="page--heading-three" headingText="h3 - Heading three" />;

//Heading four
export const headingFour = () => <HeadingElement level="4" styleName="page--heading-four" headingText="h4 - Heading four" />;

//Heading five
export const headingFive = () => <HeadingElement level="5" styleName="page--heading-five" headingText="h5 - Heading five" />;

//Heading six
export const headingSix = () => <HeadingElement level="6" styleName="page--heading-six" headingText="h6 - Heading six" />;
