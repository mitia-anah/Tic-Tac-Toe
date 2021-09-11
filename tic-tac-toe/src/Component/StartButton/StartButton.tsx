import { Link } from 'react-router-dom'
import { Paths } from '../../Path/Index'
export function StartButton() {
  return (
    <Link to={`${Paths.BOARD}`}>
      <button type='submit'>Start</button>
    </Link>
  )
}
