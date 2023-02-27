import React from 'react'
import { BoxLinkedin } from '../BoxLinkedin'
import { PlaceIMG } from '../PlaceIMG'
import './style.css'

export const Content = () => {
  return (
    <div className='content'>
      <div className='wrapper'>
        <BoxLinkedin/>
        <PlaceIMG/>
      </div>
    </div>
  )
}
