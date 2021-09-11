import { useAppDispatch, useAppSelector } from '../../app/hooks'
import styled, { css } from 'styled-components'
import {
  selectPlayers,
  setFirstPlayer,
  setSecondPlayer,
} from '../../features/Players/PlayersSlice'
import { Timer } from '../Timer/Timer'

export function InputName() {
  const players = useAppSelector(selectPlayers)
  const dispatch = useAppDispatch()

  return (
    <NameContainer>
      <h3>Choose your name</h3>
      <EllipseContainer>
        <label>X</label>
        <Input
          type='text'
          name='player'
          value={players.firstPlayer}
          placeholder='leave empty to use AI or enter player name'
          onChange={(e) => dispatch(setFirstPlayer(e.target.value))}
        />
      </EllipseContainer>
      <CrossContainer>
        <label>O</label>
        <Input
          type='text'
          name='player'
          placeholder='leave empty to use AI or enter player name'
          value={players.secondPlayer}
          onChange={(e) => dispatch(setSecondPlayer(e.target.value))}
        />
      </CrossContainer>
      <Timer />
    </NameContainer>
  )
}

const flex = css`
  display: flex;
  align-items: center;
  gap: 2px;
`
const NameContainer = styled.form``
const EllipseContainer = styled.div`
  ${flex}
`
const CrossContainer = styled.div`
  ${flex}
`
const Input = styled.input`
  border-style: none;
  cursor: pointer;
  outline: none;
`
