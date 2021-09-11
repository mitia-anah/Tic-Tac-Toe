import { StartPage } from './Pages/StartPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Paths } from './Path/Index'
import styled from 'styled-components'
import { Players } from './Pages/Player'
import { Board } from './Component/Board/Board'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <h1>Tic Tac Toe</h1>
        <Switch>
          <Route exact path={Paths.DEFAULT}>
            <StartPage />
          </Route>
          <Route path={Paths.PLAYERS}>
            <Players />
          </Route>
          <Route path={Paths.BOARD}>
            <Board />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
  max-width: 80%;
  min-width: 80%;
  margin: auto;
`

export default App
