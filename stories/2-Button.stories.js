import React from 'react';
import { ButtonElement } from '../src/components/button-storybook';
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";


storiesOf("Button", module)
  .add("Default", () => <ButtonElement btnType="button" styleName="btn--default mr-2" btnText={text("btnText", "Default Button")} />, {
    notes: "This is Default button"
  })
  .add("primary", () => <ButtonElement btnType="button" styleName="btn--primary mr-2" btnText="Primary Button" />)
  .add("Secondary", () => <ButtonElement btnType="button" styleName="btn--secondary mr-2" btnText="Secondary Button" />)
  .add("Link", () => <ButtonElement btnType="button" styleName="btn--link mr-2 p-0" btnText="Link Button" />);

  