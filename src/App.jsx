import './styles/index.css'
import Header from './components/Header'
import TeamInfo from './components/TeamInfo'
import PlayersInfo from './components/PlayersInfo'
// import TeamContent from './components/TeamContent'

function App() {

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <TeamInfo/>
        <PlayersInfo/>
      </main>
    </div>
  )
}

export default App
