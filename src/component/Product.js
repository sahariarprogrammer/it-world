import React from 'react'
import Latestproducts from './Latestproducts'
import {valueobjectproductoriginalproduct1, valueobjectproductoriginalproduct2, valueobjectproductoriginalproduct3} from './Value'

function Product() {
    return (
        <>
         <Latestproducts {...valueobjectproductoriginalproduct1}/>
         <Latestproducts {...valueobjectproductoriginalproduct2}/>
         <Latestproducts {...valueobjectproductoriginalproduct3}/>
        </>
    )
}

export default Product
