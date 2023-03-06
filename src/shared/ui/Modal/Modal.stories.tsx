import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from 'shared/ui/Modal/Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  className: 'app_light_theme',
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n '
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  className: 'app_dark_theme',
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n '
}
