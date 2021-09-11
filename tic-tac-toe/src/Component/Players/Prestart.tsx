import { useState } from 'react'
import Ellipse from '../../Images/ellipse.svg'
import Cross from '../../Images/cross.svg'
import styled, { css } from 'styled-components'
import { inputName, selectName } from '../../features/Game/gameSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

export function PreStart() {
  const [name, setName] = useState('')
  const playersName = useAppSelector(selectName)
  console.log(playersName)

  const dispatch = useAppDispatch()

  return (
    <NameField>
      <EllipseContainer>
        <img src={Ellipse} alt='Ellipse' />
        <input
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </EllipseContainer>
      <CrossContainer>
        <img src={Cross} alt='cross' />
        <input
          type='text'
          placeholder='Enter your name '
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </CrossContainer>
      <button type='submit' onClick={() => dispatch(inputName())}>
        Enter
      </button>
    </NameField>
  )
}

const flex = css`
  display: flex;
  align-items: center;
  gap: 4rem;
`
const NameField = styled.form`
  max-width: 80%;
  min-width: 80%;
  margin: auto;
`
const EllipseContainer = styled.div`
  ${flex}
`
const CrossContainer = styled.div`
  ${flex}
`
