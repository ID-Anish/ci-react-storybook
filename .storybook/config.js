import { configure, addDecorator, addParameters } from '@storybook/react';
import { withNotes } from "@storybook/addon-notes";
import myInvestisTheme from "./myInvestisTheme";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withNotes);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
addParameters({
    options: {
      theme: myInvestisTheme
    }
  });
  
