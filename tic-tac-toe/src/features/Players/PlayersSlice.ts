import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
interface Players {
  firstPlayer: string
  secondPlayer: string
}
export interface PlayerState {
  players: Players
}
const initialState: PlayerState = {
  players: {
    firstPlayer: 'x',
    secondPlayer: 'o',
  },
}

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setFirstPlayer: (state, action: PayloadAction<string>) => {
      state.players.firstPlayer = action.payload
    },
    setSecondPlayer: (state, action: PayloadAction<string>) => {
      state.players.secondPlayer = action.payload
    },
  },
})

export const { setFirstPlayer, setSecondPlayer } = playerSlice.actions

export const selectPlayers = (state: RootState) => state.players.players

export default playerSlice.reducer
