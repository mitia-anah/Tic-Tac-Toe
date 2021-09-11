import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
interface PlayerNameState {
  board: string[]
  players: string
  winner: boolean
}

const initialState: PlayerNameState = {
  board: Array(9).fill(null),
  players: 'X',
  winner: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<string[]>) => {
      state.board = action.payload
    },
    AddPlayer: (state, action: PayloadAction<string>) => {
      state.players = action.payload
    },
    setWinner: (state, action: PayloadAction<boolean>) => {
      state.winner = action.payload
    },
  },
})

export const { AddPlayer, setBoard, setWinner } = gameSlice.actions

export const selectBoard = (state: RootState) => state.board.board
export const selectPlayer = (state: RootState) => state.players.players
export const selectWinner = (state: RootState) => state.winner.winner

export const boardSelector = createSelector<RootState, string[], string[]>(
  selectBoard,
  (board) => board
)
export const playerSelector = createSelector<RootState, string, string>(
  selectPlayer,
  (player) => player
)
export const winnerSelector = createSelector<RootState, boolean, boolean>(
  selectWinner,
  (win) => win
)

export default gameSlice.reducer
