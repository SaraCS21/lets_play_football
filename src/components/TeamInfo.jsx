import React from 'react'
import DivInfo from './DivInfo'

function TeamInfo({team}) {
    const countryCapitalize = `${team.country?.charAt(0).toUpperCase()}${team.country?.slice(1)}`

    return (
        <section className='w-full xl:bg-[#085eb1] xl:flex xl:p-9'>
            <div className='w-full xl:w-3/12 h-[30vh] xl:h-[20vh] flex items-center justify-center bg-black'>
                <img src={team.icon} alt={team.name} className="w-5/12"/>
            </div>
            <section className='w-full p-4 xl:p-0 xl:pl-10 xl:pb-20 bg-[#085eb1] text-white'>
                <h1 className='font-semibold text-3xl xl:text-2xl'>{team.name}</h1>
                <h2 className='font-semibold text-2xl xl:text-xl opacity-70 mb-8'>{countryCapitalize}</h2>

                <div className='w-full h-px bg-white opacity-30'></div>

                <h3 className='w-full mt-3 text-lg xl:text-base font-semibold'>INFO</h3>
                <section className='w-full xl:w-1/4 flex flex-col mt-3'>
                    <DivInfo name={"PLAYERS"} value={team.players?.length}/>
                    <DivInfo name={"AGE"} value={"35 YEARS"}/>
                </section>
            </section>
        </section>
    )
}

export default TeamInfo