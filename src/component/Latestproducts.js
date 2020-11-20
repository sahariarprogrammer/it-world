import React from 'react'
import './Latestproducts.css'
import {Button} from './Button'

function Latestproducts({headinginhome, cardimgsrc1,cardheading1, cardtext1,cardimgsrc2,cardheading2, cardtext2,cardimgsrc3,cardheading3, cardtext3}) {
    return (
        <div className='container-latest-products'>
            <div className='container-latest-products-div'>
                 {headinginhome ? <h1>Our latest products</h1> : null}
                 <div className='latest-products'>
                    <div className='latest-products-card'>
                        <img src={cardimgsrc1}/>
                        <h2>{cardheading1}</h2>
                        <p> {cardtext1}</p>
                        <Button buttonSize='btn--medium' buttonColor='green'>
                                        Order now
                        </Button>
                    </div>

                    <div className='latest-products-card'>
                        <img src={cardimgsrc2}/>
                        <h2>{cardheading2}</h2>
                        <p> {cardtext2}</p>
                        <Button buttonSize='btn--medium' buttonColor='green'>
                                        Order now
                        </Button>
                    </div>

                    <div className='latest-products-card'>
                        <img src={cardimgsrc3}/>
                        <h2>{cardheading3}</h2>
                        <p> {cardtext3}</p>
                        <Button buttonSize='btn--medium' buttonColor='green'>
                                        Order now
                        </Button>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Latestproducts
