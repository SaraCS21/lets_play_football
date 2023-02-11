import React from 'react'

import { RiFootballFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';

function Header({page}) {
    const playersColor = page === "players" ? "#ea5e00" : "#085eb1" ;
    const teamsColor = page === "teams" ? "#ea5e00" : "#085eb1";

    return (
        <nav className='w-full h-[10vh] xl:h-[7vh] flex justify-between'>
            <div className='w-1/4 xl:w-[5%] flex justify-center items-center border-r-2 border-[#e2ecf6]'>
                <div className='flex justify-center items-center w-[1.8rem] h-[1.8rem] bg-[#085eb1] rounded-full'>
                    <RiFootballFill className='text-white text-lg'/>
                </div>
            </div>
            <div className='w-7/12 xl:w-[90%] flex justify-around xl:justify-start items-center font-semibold text-lg'>
                <p className={`text-[${playersColor}] xl:pl-16`}>PLAYERS</p>
                <p className={`text-[${teamsColor}] xl:pl-16`}>TEAMS</p>
            </div>
            <div className='w-2/12 xl:w-[5%] flex justify-center items-center border-l-2 border-[#e2ecf6]'>
                <AiOutlineSearch className='text-[#085eb1] text-xl'/>
            </div>
        </nav>
    )
}

export default Header