import React from 'react'

function PlayersInfo({team}) {
    const teamInfo = team.team;
    const playersInfo = teamInfo.players;

    return (
        <div>
            {/* {playersInfo.map((player => {
                <section className='w-full xl:w-1/4 p-2 xl:m-8 flex'>
                    <img className='w-2/5 h-20 xl:h-24 bg-black' src={player.photo} alt={player.name}/>
                    <div className='ml-5 xl:ml-7 mt-1'>
                        <p className='text-lg font-bold'>{player.surname} {player.name}</p>
                        <p className='font-bold text-[#8a8a8a]'>{position.name}</p>
                    </div>
                </section>
                }))
            } */}
        </div>
    )
}

export default PlayersInfo