import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"

import { getData } from '../functions/getData'

import DataHeader from './DataHeader'
import DataBody from './DataBody'

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
        <section className='w-full xl:bg-[#085eb1] xl:flex xl:p-9'>
            <div className='w-full xl:w-3/12 h-[30vh] xl:h-[20vh] flex items-center justify-center relative'>
                <img src={player.photo} alt={player.name} className="w-full h-full object-cover"/>
                <img src={team.icon} alt={team.name} className="w-2/12 bottom-2 right-4 absolute"/>
            </div>
            <section className='w-full p-4 xl:p-0 xl:pl-10 pb-10 xl:pb-20 bg-[#085eb1] text-white'>
                <DataHeader value={ player } page="players" />
                <div className='w-full h-px bg-white opacity-30'></div>
                <DataBody datas={getData(player).player} head="PROFILE" />
            </section>
        </section>
    )
}

export default PlayerInfo