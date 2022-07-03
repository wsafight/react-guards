import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ReactGuards,
  ReactGuardsProps,
} from '../src';
const meta: Meta = {
  title: 'Welcome',
  component: ReactGuards,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ReactGuardsProps> = args => (
  <ReactGuards {...args} >
    我是小苹果
  </ReactGuards>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
