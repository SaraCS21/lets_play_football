import React from 'react'

function Footer({page}) {
    return (
        <footer id={page} className='w-full p-4 xl:p-10 xl:absolute xl:bottom-0 flex justify-center text-mainColor text-xs'>
            <p>Me gusta el futbol · 2023 ©</p>
        </footer>
    )
}

export default Footer