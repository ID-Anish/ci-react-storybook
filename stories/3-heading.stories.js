import React from 'react';
import { HeadingElement } from '../src/components/heading';
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

storiesOf("Heading", module)
  .add("Heading one", () => <HeadingElement level="1" styleName="page--heading-one" headingText={text("headingText", "h1 - Heading one")} />, {
    notes: "For heading one (h1), add class name 'page--heading-one'."
  })
  
  .add("Heading two", () => <HeadingElement level="2" styleName="page--heading-two" headingText={text("headingText", "h2 - Heading two")} />, {
    notes: "For heading two (h2), add class name 'page--heading-two'."
  })
  
  .add("Heading three", () => <HeadingElement level="3" styleName="page--heading-three" headingText={text("headingText", "h3 - Heading three")} />, {
    notes: "For heading three (h3), add class name 'page--heading-three'."
  })
  
  .add("Heading four", () => <HeadingElement level="4" styleName="page--heading-four" headingText={text("headingText", "h4 - Heading four")} />, {
    notes: "For heading four (h4), add class name 'page--heading-four'."
  })

  .add("Heading five", () => <HeadingElement level="5" styleName="page--heading-five" headingText={text("headingText", "h5 - Heading five")} />, {
    notes: "For heading five (h5), add class name 'page--heading-five'."
  })
  
  .add("Heading six", () => <HeadingElement level="6" styleName="page--heading-six" headingText={text("headingText", "h6 - Heading six")} />, {
    notes: "For heading six (h6), add class name 'page--heading-six'."
  });