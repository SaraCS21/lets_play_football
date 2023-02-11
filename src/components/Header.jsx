import React from 'react'
import { Link } from 'react-router-dom';

import { RiFootballFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';

function Header({page}) {
    const playersActive = page === "players" ? "active" : "" ;
    const teamsActive = page === "teams" ? "active" : "";

    return (
        <nav className='w-full h-[10vh] xl:h-[7vh] flex justify-between'>
            <div className='w-1/4 xl:w-[5%] flex justify-center items-center border-r-2 border-[#e2ecf6]'>
                <Link to={`/`} className='flex justify-center items-center w-[1.8rem] h-[1.8rem] bg-mainColor rounded-full'>
                    <RiFootballFill className='text-white text-lg'/>
                </Link>
            </div>
            <div className='w-7/12 xl:w-[90%] flex justify-around xl:justify-start items-center font-semibold text-lg'>
                <p id={playersActive} className={'text-mainColor xl:pl-16 cursor-pointer'}>PLAYERS</p>
                <p id={teamsActive} className={'text-mainColor xl:pl-16 cursor-pointer'}>TEAMS</p>
            </div>
            <div className='w-2/12 xl:w-[5%] flex justify-center items-center border-l-2 border-[#e2ecf6]'>
                <AiOutlineSearch className='text-mainColor text-xl cursor-pointer'/>
            </div>
        </nav>
    )
}

export default Header