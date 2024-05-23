import React from 'react'
import './Card.css'

export default function Card(props) {
  
  return (
    <div>
     
        {props.children}

        <div className='under'>

        <div className='image-container'>
            <img className='conphoto' alt="conphoto" src={props.img}></img>
          </div>
          <div className='textmcanic'>
            <h4>{props.h}</h4>
          </div>
          <div className='textkhadamat' style={{ display: props.para ? 'flex' : 'none' }}>
              <p className='undercard' style={{ direction: 'rtl' }}>{props.para}</p>
            </div>
        </div>
    </div>
  )
}
