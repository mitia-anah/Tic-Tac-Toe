import { Link } from 'react-router-dom'
import { Paths } from '../Path/Index'

export function Players() {
  return (
    <div>
      <Link to={`${Paths.DEFAULT}`}>
        <p>Go back to start </p>
      </Link>
      <p>Players screen</p>
    </div>
  )
}
