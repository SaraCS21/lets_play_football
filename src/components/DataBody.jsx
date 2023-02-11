import React from 'react'
import DivInfo from './DivInfo'

function DataHeader({ datas, head }) {
    return (
        <>
            <h3 className='w-full mt-3 text-lg xl:text-base font-semibold'>{head}</h3>
            <section className='w-full xl:w-1/4 flex flex-col mt-3'>
                {
                    datas.map((data =>
                        <DivInfo name={data.name} value={data.value}/>
                    ))
                }
            </section>
        </>
    )
}

export default DataHeader





