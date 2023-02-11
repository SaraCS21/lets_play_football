import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import DivInfo from './DivInfo'

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
            <div className='w-full xl:w-3/12 h-[30vh] xl:h-[20vh] flex items-center justify-center bg-black relative'>
                <img src={player.photo} alt={player.name} className="w-full"/>
                <img src={team.icon} alt={team.name} className="w-2/12 bottom-2 right-4 absolute"/>
            </div>
            <section className='w-full p-4 xl:p-0 xl:pl-10 pb-10 xl:pb-20 bg-[#085eb1] text-white'>
                <div className='w-full flex justify-between'>
                    <div>
                        <h1 className='font-semibold text-3xl xl:text-2xl'>{player.surname} {player.name}</h1>
                        <h2 className='font-semibold text-2xl xl:text-xl opacity-70 mb-8'>{player.position}</h2>
                    </div>
                    
                    <p className='text-7xl font-semibold'>{player.number}</p>
                </div>

                <div className='w-full h-px bg-white opacity-30'></div>

                <h3 className='w-full mt-3 text-lg xl:text-base font-semibold'>PROFILE</h3>
                <section className='w-full xl:w-1/4 flex flex-col mt-3'>
                    <DivInfo name={"BIRTHDAY"} value={player.birthday}/>
                    <DivInfo name={"AGE"} value={"35 YEARS"}/>
                    <DivInfo name={"HEIGHT"} value={player.height}/>
                    <DivInfo name={"WEIGHT"} value={player.weight}/>
                    <DivInfo name={"FEET"} value={player.rightFeet}/>
                </section>
            </section>
        </section>
    )
}

export default PlayerInfo