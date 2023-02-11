import React from 'react'
import Info from './Info'

function DataBody({ page, data, head }) {
    return (
        <>
            <h3 className='w-full mt-3 text-lg xl:text-base font-semibold'>{head}</h3>
            <section id={page} className={`w-full flex flex-wrap flex-row mt-3`}>
                {
                    data.map((element =>
                        <Info name={element.name} value={element.value} page={page}/>
                    ))
                }
            </section>
        </>
    )
}

export default DataBody





