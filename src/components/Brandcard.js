import React from 'react'
import './Brandcard.css'

export default function Brandcard(props) {
    return (
        <div>
            <div className='brandcardimage'>
                <div className={`brandcard brandcard-${props.index}`}>
                    <div className='brandcardimg'>
                        <img src={props.img}></img>
                    </div>
                </div>
                <div className={`brandcards brandcards-${props.index}`}>
                    <div className='brandcardimgs'>
                        <img src={props.imgs}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
