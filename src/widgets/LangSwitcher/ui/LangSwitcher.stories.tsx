import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'

export default {
  title: 'widget/LangSwitcher',
  component: LangSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />

export const Normal = Template.bind({})
Normal.args = {}
