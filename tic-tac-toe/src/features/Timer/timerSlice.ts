import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface TimerState {
  timerDefault: number
}

const initialState: TimerState = {
  timerDefault: 3,
}

export const timeSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimerDefault: (state, action: PayloadAction<number>) => {
      state.timerDefault = action.payload
    },
  },
})

export const { setTimerDefault } = timeSlice.actions

export const selectTimerDefault = (state: RootState) => state.timer.timerDefault
export const timerSelector = createSelector<RootState, number, number>(
  selectTimerDefault,
  (timer) => timer
)

export default timeSlice.reducer
