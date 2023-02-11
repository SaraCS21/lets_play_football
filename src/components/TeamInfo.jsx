import React from 'react'

import { getData } from "../functions/getData"

import DataHeader from './DataHeader'
import DataBody from './DataBody'

function TeamInfo({team}) {
    return (
        <section className='w-full xl:bg-[#085eb1] xl:flex xl:p-9'>
            <div className='w-full xl:w-3/12 h-[30vh] xl:h-[20vh] flex items-center justify-center bg-black'>
                <img src={team.icon} alt={team.name} className="w-5/12"/>
            </div>
            <section className='w-full p-4 xl:p-0 xl:pl-10 pb-10 xl:pb-20 bg-[#085eb1] text-white'>
                <DataHeader value={team} page="teams" />
                <div className='w-full h-px bg-white opacity-30'></div>
                <DataBody datas={getData(team).team} head="INFO" />
            </section>
        </section>
    )
}

export default TeamInfo