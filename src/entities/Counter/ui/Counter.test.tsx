import { screen } from '@testing-library/react'
import { componentRender } from 'shared/config/tests/componentRender/componentRender'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

const initialState = {
  counter: { value: 10 },
  user: {},
  loginForm: {
    username: '',
    password: '',
    isLoading: false
  }
}

describe('Counter', () => {
  test('Test render', () => {
    componentRender(<Counter/>, {
      initialState
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })
  test('increment', () => {
    componentRender(<Counter/>, {
      initialState
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
  test('decrement', () => {
    componentRender(<Counter/>, {
      initialState
    })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
