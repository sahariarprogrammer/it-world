import React, { Children } from 'react'
import './Home.css'
import Latestproducts from './Latestproducts'

import {Button} from './Button'
import Common from './Common'
import {valueobject1, valueobject2, valueobject3, valueobjectproducthome} from './Value'


function Home() {
    return (
        <>
            <Common {...valueobject1}/>
            <Common {...valueobject2}/>
            <Common {...valueobject3}/>
            <Latestproducts {...valueobjectproducthome} />
        </>
    )
}

export default Home
