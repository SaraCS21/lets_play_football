import React from 'react'

function DivInfo({ name, value }) {
    return (
        <div className='w-full flex items-center xl:text-sm xl:pt-2'>
            <p className='w-1/3 font-semibold text-right mr-5'>{ name }</p>
            <p className='w-2/3 text-sm opacity-90'>{ value }</p>
        </div>
    )
}

export default DivInfo