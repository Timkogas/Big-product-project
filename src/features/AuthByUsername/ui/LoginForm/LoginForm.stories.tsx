import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'asdas' } })]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'asdas', error: 'Вы ввели неверный пароль или логин' } })]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })]
