import React from 'react';
import { ButtonElement } from '../src/components/button';
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

storiesOf("Button", module)
  .add("Default", () => <ButtonElement btnType="button" click={action('clicked')} styleName="btn--default mr-2" btnText={text("btnText", "Default Button")} />, {
    notes: "For Default Button, add class name 'btn--default'."
  })

  .add("primary", () => <ButtonElement btnType="button" click={action('clicked')} styleName="btn--primary mr-2" btnText={text("btnText", "Primary Button")} />, {
    notes: "For Primary Button, add class name 'btn--primary'."
  })

  .add("Secondary", () => <ButtonElement btnType="button" click={action('clicked')} styleName="btn--secondary mr-2" btnText={text("btnText", "Secondary Button")} />, {
    notes: "For Secondary Button, add class name 'btn--secondary'."
  })
  
  .add("Link", () => <ButtonElement btnType="button" click={action('clicked')} styleName="btn--link p-0" btnText={text("btnText", "Link Button")} />, {
    notes: "For Link Button, add class name 'btn--Link'."
  });

  