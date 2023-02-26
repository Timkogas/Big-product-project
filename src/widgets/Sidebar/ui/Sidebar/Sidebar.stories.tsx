import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Sidebar } from './Sidebar'

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Normal = Template.bind({})
Normal.args = {}
