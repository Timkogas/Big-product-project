import { addDecorator } from '@storybook/react'
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator/StyleDecorator'
import { ThemeProviderDecorator } from '../../src/shared/config/storyBook/ThemeProviderDecorator/ThemeProviderDecorator'
import { withThemes } from 'storybook-addon-themes/react'

import i18n from './i18next.js'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ['app', 'app_light_theme'], color: '#e8e8ea' },
      { name: 'dark', class: ['app', 'app_dark_theme'], color: '#090949' }
    ]
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ru: 'Russian'
  }
}
addDecorator(withThemes)
addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(ThemeProviderDecorator)
