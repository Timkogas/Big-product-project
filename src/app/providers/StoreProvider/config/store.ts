import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

import { type StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema): ToolkitStore<StateSchema> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  }
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: _IS_DEV_,
    preloadedState: initialState
  })
}
