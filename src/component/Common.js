import React, { Children } from 'react'
import './Common.css'

import {Button} from './Button'


function Common({background,heading,description,buttontext,imgsrc,left,right,buttonposition,buttoncolor}) {
    return (
        <>
           <div className={background ? 'container-different' : 'container'}>
                <div className='container-inside'>
                    <div className={left ? 'left-side-right':'left-side'}>
                        <h1>{heading}</h1>
                        <p>{description}</p>
                        <div className={buttonposition ? 'buttonposition-reverse':''}>
                            <Button buttonSize='btn--wide' buttonColor={buttoncolor ? 'red' : 'blue'}>
                                        {buttontext}
                            </Button>
                        </div>
                    </div>
                    <div className={right ? 'right-side-left':'right-side' }>
                        <img src={imgsrc} alt='' className='img'/>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Common
