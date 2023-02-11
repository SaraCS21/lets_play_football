import React from 'react'

import { getData } from '../functions/getData'

import DataHeader from './DataHeader'
import DataBody from './DataBody'

function DataSection({ value, page }) {
    const head = page === "team" ? "INFO" : "PROFILE";
    const datas = page === "team" ? getData(value).team : getData(value).player;

    return (
        <section className='w-full p-4 xl:p-0 xl:pl-10 pb-10 xl:pb-20 bg-mainColor text-white'>
            <DataHeader value={value} page={page} />
            <div className='w-full h-px bg-white opacity-30'></div>
            <DataBody page={page} datas={datas} head={head} />
        </section>
    )
}

export default DataSection