import React from 'react'

import { capitalize } from "../functions/functions"

function DataHeader({ value, page }) {
    const h1 = page === "team" ? value.name : `${value.name} ${value.lastname}`;
    const h2 = page === "team" ? value.country : value.position;
    const p = page === "team" ? "" : value.number;

    return (
        <div className='w-full flex justify-between'>
            <div>
                <h1 className='font-semibold text-3xl xl:text-2xl'>{h1}</h1>
                <h2 className='font-semibold text-2xl xl:text-xl opacity-70 mb-8'>{capitalize(h2)}</h2>
            </div>
            
            <p className='text-7xl font-semibold'>{p}</p>
        </div>
    )
}

export default DataHeader