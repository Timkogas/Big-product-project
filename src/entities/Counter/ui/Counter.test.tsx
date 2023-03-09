import { screen } from '@testing-library/react'
import { componentRender } from 'shared/config/tests/componentRender/componentRender'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  test('Test render', () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 }, user: {} }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })
  test('increment', () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 }, user: {} }
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
  test('decrement', () => {
    componentRender(<Counter/>, {
      initialState: { counter: { value: 10 }, user: {} }
    })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
