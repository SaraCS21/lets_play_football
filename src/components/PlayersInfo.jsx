import React from 'react'
import { Link } from 'react-router-dom';

import { capitalize } from "../functions/functions"

function PlayersInfo({ team }) {
    const playersInfo = team?.players;

    return (
        playersInfo ? <div className='w-full flex flex-wrap items-middle'>
            {playersInfo.map((player => 
                <section key={player.name} className='w-full xl:w-1/4 p-2 xl:m-8 flex'>
                    <Link to={`player?name=${player.name}`} className="w-full flex">
                        <img className='w-2/5 h-20 xl:h-24 bg-black' src={player.photo} alt={player.name} />
                        <div className='ml-5 xl:ml-7 mt-1'>
                            <p className='text-lg font-bold'>{player.surname} {player.name}</p>
                            <p className='font-bold text-[#8a8a8a]'>{capitalize(player.position)}</p>
                        </div>
                    </Link>
                </section>
            ))
            }
        </div> : null
    )
}

export default PlayersInfo