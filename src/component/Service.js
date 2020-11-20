import React from 'react'
import Common from './Common'
import {valueobjectservice1, valueobjectservice2, valueobjectservice3, valueobjectservice4} from './Value'

function Service() {
    return (
        <>
            <Common {...valueobjectservice1}/>
            <Common {...valueobjectservice2}/>
            <Common {...valueobjectservice3}/>
            <Common {...valueobjectservice4}/>
        </>
    )
}

export default Service
