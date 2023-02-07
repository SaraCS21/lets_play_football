import React from 'react'

function Header() {
    return (
        <nav className='w-full h-[10vh] flex justify-between'>
            <div className='w-1/4 flex justify-center items-center border-r-2 border-[#e2ecf6]'>
                <img src="" alt="logo"/>
            </div>
            <div className='w-7/12 flex justify-around items-center font-semibold text-lg'>
                <p className='text-[#085eb1]'>PLAYERS</p>
                <p className='text-[#ea5e00]'>TEAMS</p>
            </div>
            <div className='w-2/12 flex justify-center items-center border-l-2 border-[#e2ecf6]'>
                <i class='bx bx-search text-[#085eb1] text-xl'></i>
            </div>
        </nav>
    )
}

export default Header