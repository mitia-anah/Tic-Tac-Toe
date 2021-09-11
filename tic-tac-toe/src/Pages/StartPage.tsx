import { useAppDispatch } from '../app/hooks'
import styled, { css } from 'styled-components'
import { playerSelector, AddPlayer } from '../features/Game/gameSlice'
import Ellipse from '../Images/ellipse.svg'
import Cross from '../Images/cross.svg'
import { Link } from 'react-router-dom'
import { Paths } from '../Path/Index'
import { useSelector } from 'react-redux'
import { Timer } from '../Component/Timer/Timer'

export function StartPage() {
  const player = useSelector(playerSelector)
  const dispatch = useAppDispatch()

  function handleSubmit(e) {
    dispatch(AddPlayer(e.target.player.value))
  }
  return (
    <NameContainer>
      <h3>Choose your name</h3>
      <EllipseContainer onSubmit={(e) => handleSubmit(e)}>
        <label>
          <img src={Ellipse} alt='Ellipse' />
        </label>
        <Input
          type='text'
          name='player'
          // value='O'
          placeholder='leave empty to use AI or enter player name'
          onChange={() => null}
          onClick={() => dispatch(AddPlayer(player))}
        />
      </EllipseContainer>
      <CrossContainer>
        <label>
          <img src={Cross} alt='cross' />
        </label>
        <Input
          type='text'
          name='player'
          placeholder='leave empty to use AI or enter player name'
          // value='X'
          onChange={() => null}
          // onChange={() => null}
          onClick={() => dispatch(AddPlayer(player))}
        />
      </CrossContainer>
      <Timer />
      <Link to={`${Paths.PLAYERS}`}>
        <Input type='submit' value='Start' />
      </Link>
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
