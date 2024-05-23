import React from 'react'
import './Photo.css'
import mechanicwebp from '../components/image/mechanic.jpg'
import mechanicwebp1 from '../components/image/mechanic1.jpg' 
export default function Photo() {
  return (
    <div className='photo' id='photo'>
      <img className='mechanicwebp' src={mechanicwebp}></img>
      <img className='mechanicwebp1' src={mechanicwebp1}></img>
      <h1 className='overlay-text'>خودروهای تحت پوشش ایران امداد خودرو</h1>
    </div>
  )
}

