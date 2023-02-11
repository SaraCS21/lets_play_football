import React from 'react'

import DataSection from './DataSection'

function TeamInfo({team}) {
    return (
        <section className='w-full xl:bg-mainColor xl:flex xl:p-9'>
            <div className='w-full xl:w-3/12 h-[30vh] xl:h-[20vh] flex items-center justify-center bg-black'>
                <img src={team.icon} alt={team.name} className="w-5/12"/>
            </div>
            <DataSection value={team} page="team" />
        </section>
    )
}

export default TeamInfo