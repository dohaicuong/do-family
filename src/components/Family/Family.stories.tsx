import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Family from '.'

export default {
  title: 'FamilyView',
  component: Family,
} as Meta;

const Template: Story = (args: any) => <Family {...args} />;

export const FamilyView = Template.bind({});
FamilyView.args = {
  primary: true,
  label: 'FamilyView',
};