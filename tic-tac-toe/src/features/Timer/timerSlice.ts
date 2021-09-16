import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
interface TimerState {
  timerDefault: number
  runTime: boolean
}

const initialState: TimerState = {
  timerDefault: 3,
  runTime: false,
}

export const timeSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimerDefault: (state, action: PayloadAction<number>) => {
      state.timerDefault = action.payload
    },
    setRunTime: (state, action: PayloadAction<boolean>) => {
      state.runTime = action.payload
    },
  },
})

export const { setTimerDefault, setRunTime } = timeSlice.actions

export const selectTimerDefault = (state: RootState) => state.timer.timerDefault
export const selectRunTime = (state: RootState) => state.runTime.runTime
export const timerSelector = createSelector<RootState, number, number>(
  selectTimerDefault,
  (timer) => timer
)
export const runTimeSelector = createSelector<RootState, boolean, boolean>(
  selectRunTime,
  (runTime) => runTime
)

export default timeSlice.reducer
