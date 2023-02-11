import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"

import DataSection from './DataSection'

function PlayerInfo({ team }) {
    const [params] = useSearchParams();
    const namePlayer = params.get("name");
    const teamPlayers = team?.players;

    const [player, setPlayer] = useState({});

    useEffect(() => {
        if (teamPlayers) {
            const playerInfo = teamPlayers.find(player => player.name === namePlayer);

            setPlayer(playerInfo)
        }
    }, [teamPlayers])

    return (
        <section className='w-full xl:bg-mainColor xl:flex xl:p-9'>
            <div className='w-full xl:w-3/12 h-[30vh] xl:h-[20vh] flex items-center justify-center relative'>
                <img src={player.photo} alt={player.name} className="w-full h-full object-cover"/>
                <img src={team.icon} alt={team.name} className="w-2/12 absolute bottom-2 xl:bottom-0 right-4 xl:right-6 "/>
            </div>
            <DataSection value={player} page="player" />
        </section>
    )
}

export default PlayerInfo