import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"

import DataSection from './DataSection'
import DataImage from './DataImage'

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
            <DataImage team={team} player={player} />
            <DataSection value={player} page="player" />
        </section>
    )
}

export default PlayerInfo