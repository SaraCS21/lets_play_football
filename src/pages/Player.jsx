import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PlayerInfo from '../components/PlayerInfo'

function Home() {

    const [team, setTeam] = useState({});

    useEffect(() => {
        const fetchTeam = async () => {
            const response = await fetch("/team.json");
            const data = await response.json();
            const { team: teamData } = data

            setTeam(teamData)
        }

        fetchTeam()
    }, [])

    return (
        <div className='min-h-screen relative'>
            <header>
                <Header page="players" />
            </header>
            <main>
                <PlayerInfo team={team} />
            </main>
            <Footer page="players" />
        </div>
    )
}

export default Home