import React from 'react'
import DivInfo from './DivInfo'

function DataBody({ datas, head, width = "w-full", xlwidth= "" }) {
    return (
        <>
            <h3 className='w-full mt-3 text-lg xl:text-base font-semibold'>{head}</h3>
            <section className={`w-full ${xlwidth} flex flex-wrap flex-row mt-3`}>
                {
                    datas.map((data =>
                        <DivInfo name={data.name} value={data.value} width={width}/>
                    ))
                }
            </section>
        </>
    )
}

export default DataBody





