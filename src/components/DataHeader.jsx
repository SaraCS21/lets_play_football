import React from 'react'

import { capitalize } from "../functions/functions"

function DataHeader({ value, page }) {
    const name = page === "team" ? value.name : `${value.name} ${value.lastname}`;
    const subtitle = page === "team" ? value.country : value.position;
    const number = page === "team" ? "" : value.number;

    return (
        <div className='w-full flex justify-between'>
            <div>
                <h1 className='font-semibold text-3xl xl:text-2xl'>{name}</h1>
                <h2 className='font-semibold text-2xl xl:text-xl opacity-70 mb-8'>{capitalize(subtitle)}</h2>
            </div>
            
            <p className='text-7xl font-semibold'>{number}</p>
        </div>
    )
}

export default DataHeader