import React from 'react'
import {FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {Button} from '../component/Button'
import './Footer.css'

function Footer() {
    return (
        <>
        <div className='footer-container'>
            <div className='footer-div'>
                <div className='company-info'>
                    <h1>IT WORLD</h1>
                    <p>Our copany is one of the fastest growiing company in the market. Our copany is one of the fastest growiing company in the market. Our copany is one of the fastest growiing company in the market. Our copany is one of the fastest growiing company in the market. </p>
                </div>
                <div className='iconsandsignup'>
                    <div className='icons'>
                        <FaFacebookSquare className='icon-name'/>
                        <FaYoutubeSquare className='icon-name'/>
                        <FaInstagramSquare className='icon-name'/>
                        <AiFillLinkedin className='icon-name'/>
                    </div>
                    <div className='sign-up'>
                        <input placeholder='type your email id' className='sign-up-input'/>
                        <Button buttonSize='btn--medium' buttonColor= 'red'>
                                        Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
