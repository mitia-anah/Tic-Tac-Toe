import gameBoard from '../../Images/board.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Paths } from '../../Path/Index'

export function Board() {
  return (
    <BoardStyle>
      <Link to={`${Paths.DEFAULT}`}></Link>
      <Image src={gameBoard} alt='tic tac toe game board' />
    </BoardStyle>
  )
}

const BoardStyle = styled.div`
  max-width: 80%;
  min-width: 80%;
  margin: auto;
`
const Image = styled.img`
  width: 100%;
`
