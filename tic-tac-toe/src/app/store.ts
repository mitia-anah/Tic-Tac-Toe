import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit'
import gameReducer from '../features/Game/gameSlice'
import playersReducer from '../features/Players/PlayersSlice'
import timerReducer from '../features/Timer/timerSlice'

export const rootReducer = combineReducers({
  board: gameReducer,
  winner: gameReducer,
  players: playersReducer,
  timer: timerReducer,
  runTime: timerReducer,
})
export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
