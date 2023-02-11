import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TeamInfo from '../components/TeamInfo'
import PlayersInfo from '../components/PlayersInfo'
import '../styles/index.css'

function Home() {

    const [team, setTeam] = useState({});

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
    <div className='min-h-screen relative'>
      <header>
        <Header page="teams" />
      </header>
      <main>
        <TeamInfo team={team}/>
        <PlayersInfo team={team}/>
      </main>
      <Footer page="teams" />
    </div>
  )
}

export default Home
