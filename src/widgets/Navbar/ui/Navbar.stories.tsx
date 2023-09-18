import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator'

import { Navbar } from './Navbar'

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {}
AuthNavbar.decorators = [StoreDecorator({
  user: { authData: { id: '1', username: '2' } }
})]
