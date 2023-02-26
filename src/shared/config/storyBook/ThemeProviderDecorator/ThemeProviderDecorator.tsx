import { type Story } from '@storybook/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export const ThemeProviderDecorator = (StoryComponent: Story) => {
  return (
      <ThemeProvider>
          <StoryComponent/>
      </ThemeProvider>
  )
}
