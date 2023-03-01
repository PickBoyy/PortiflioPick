import React from 'react'
import { BoxCV } from '../BoxCV'
import { PlaceIMG } from '../PlaceIMG'
import './style.css'

export const Content = () => {
  return (
    <div className='content'>
      <div className='wrapper'>
        <BoxCV/>
        <PlaceIMG/>
      </div>
    </div>
  )
}
