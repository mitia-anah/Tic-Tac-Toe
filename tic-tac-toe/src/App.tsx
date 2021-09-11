import './App.css'
import { Board } from './Component/Board/Board'
import { PreStart } from './Component/Players/Prestart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Paths } from './Path/Index'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path={Paths.DEFAULT}>
            <PreStart />
          </Route>
          <Route path={Paths.BOARD}>
            <Board />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
