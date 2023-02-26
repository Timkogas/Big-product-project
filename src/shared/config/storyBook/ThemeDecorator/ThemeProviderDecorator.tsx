import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
      <div className={`app ${theme}`}>
          <StoryComponent/>
      </div>
  )
}
