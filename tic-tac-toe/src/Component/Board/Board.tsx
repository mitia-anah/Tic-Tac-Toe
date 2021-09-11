import { Link } from 'react-router-dom'
import { Paths } from '../../Path/Index'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  boardSelector,
  setBoard,
  setWinner,
  winnerSelector,
} from '../../features/Game/gameSlice'
import { selectPlayers } from '../../features/Players/PlayersSlice'

export function Board() {
  const board = useSelector(boardSelector)
  const isWon = useSelector(winnerSelector)
  const players = useAppSelector(selectPlayers)
  const dispatch = useAppDispatch()
  const playersTurn = players.firstPlayer
    ? players.secondPlayer
    : players.firstPlayer

  function FindWinner() {
    const validMatch = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ]

    for (let i = 0; i < validMatch.length; i++) {
      const [a, b, c] = validMatch[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        dispatch(setWinner(!isWon))
        return board[a]
      }
    }
    return null
  }

  function Move(index) {
    const newBoard = [...board]
    if (board[index]) return
    newBoard[index] = playersTurn
    dispatch(setBoard(newBoard))
    FindWinner()
  }
  const Box = board.map((box, index) => (
    <SmallBox onClick={() => Move(index)} key={index}>
      {box}
    </SmallBox>
  ))

  return (
    <BoardStyle>
      <Link to={`${Paths.DEFAULT}`}>
        <p>go back home</p>
      </Link>
      <BoardContainer>{Box}</BoardContainer>
    </BoardStyle>
  )
}

const BoardStyle = styled.div`
  max-width: 80%;
  min-width: 80%;
  margin: auto;
`

const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
`
const SmallBox = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid;
`
