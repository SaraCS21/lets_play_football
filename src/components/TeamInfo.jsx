import React from 'react'

import DataSection from './DataSection'
import DataImage from './DataImage'

function TeamInfo({team}) {
    return (
        <section className='w-full xl:bg-mainColor xl:flex xl:p-9'>
            <DataImage team={team} />
            <DataSection value={team} page="team" />
        </section>
    )
}

export default TeamInfo