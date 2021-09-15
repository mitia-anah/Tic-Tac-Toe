import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../app/hooks'
import { timerSelector } from '../../features/Timer/timerSlice'

export function Timer() {
  const timer = useSelector(timerSelector)
  console.log(timer)

  const dispatch = useAppDispatch()

  return (
    <div>
      <p>turn Time limit in seconds:{`${timer}s`}</p>
    </div>
  )
}
