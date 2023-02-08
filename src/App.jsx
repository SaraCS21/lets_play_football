import './styles/index.css'

import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TeamInfo from './components/TeamInfo'
import PlayersInfo from './components/PlayersInfo'

// import TeamContent from './components/TeamContent'

function App() {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        const fetchTeam = async () => {
            const response = await fetch("../team.json");
            const data = await response.json();
            const { team: teamData } = data

            setTeam(teamData)
        }
        
        fetchTeam()
    }, [])

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <TeamInfo/>
        <PlayersInfo/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
