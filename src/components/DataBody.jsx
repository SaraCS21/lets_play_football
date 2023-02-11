import React from 'react'
import DivInfo from './DivInfo'

function DataBody({ page, datas, head }) {
    return (
        <>
            <h3 className='w-full mt-3 text-lg xl:text-base font-semibold'>{head}</h3>
            <section id={page} className={`w-full flex flex-wrap flex-row mt-3`}>
                {
                    datas.map((data =>
                        <DivInfo name={data.name} value={data.value} page={page}/>
                    ))
                }
            </section>
        </>
    )
}

export default DataBody





