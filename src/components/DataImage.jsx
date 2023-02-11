import React from 'react'

function DataImage({ team, player = "" }) {
    const className = player === "" ? "w-5/12" : "w-2/12 absolute bottom-2 xl:bottom-0 right-4 xl:right-6";

    return (
        <div className='w-full xl:w-3/12 h-[30vh] xl:h-[20vh] flex items-center justify-center bg-black relative'>
            {player !== "" ? <img src={player.photo} alt={player.name} className="w-full h-full object-cover"/> : null}
            <img src={team.icon} alt={team.name} className={className}/>
        </div>
    )
}

export default DataImage