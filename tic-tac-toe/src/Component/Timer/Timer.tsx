import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../app/hooks'
import {
  timerSelector,
  setTimerDefault,
  runTimeSelector,
  setRunTime,
} from '../../features/Timer/timerSlice'

export function Timer() {
  const timer = useSelector(timerSelector)
  const runTime = useSelector(runTimeSelector)
  const dispatch = useAppDispatch()

  function startTimer() {
    if (timer > 0) {
      setTimeout(() => dispatch(setTimerDefault(timer - 1)), 1000)
      setRunTime(!runTime)
    } else {
      setTimerDefault(timer)
      setRunTime(runTime)
    }
  }
  useEffect(() => {
    startTimer()
  })

  return (
    <div>
      <button onClick={startTimer}>
        turn Time limit in seconds:{`${timer}s`}
      </button>
    </div>
  )
}
