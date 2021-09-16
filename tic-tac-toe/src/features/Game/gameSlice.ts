import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
interface PlayerNameState {
  board: string[]
  isWon: boolean
}

const initialState: PlayerNameState = {
  board: Array(9).fill(null),
  isWon: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<string[]>) => {
      state.board = action.payload
    },
    setWinner: (state, action: PayloadAction<boolean>) => {
      state.isWon = action.payload
    },
  },
})

export const { setBoard, setWinner } = gameSlice.actions

export const selectBoard = (state: RootState) => state.board.board
export const selectWinner = (state: RootState) => state.winner.isWon

export const boardSelector = createSelector<RootState, string[], string[]>(
  selectBoard,
  (board) => board
)
export const winnerSelector = createSelector<RootState, boolean, boolean>(
  selectWinner,
  (isWon) => isWon
)

export default gameSlice.reducer
