import { addDecorator } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
