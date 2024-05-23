import React from 'react'
import './Saidbar.css'
export default function Saidbar({ onServiceClick, onCarClick, onaboutusClick, oncallClick, onquestionsClick, onhomeClick, onCloseClick}) {
    return (
        <div className='saidbar'>
                <i class="fa fa-remove" id='close' onClick={onCloseClick}></i>
                <div><button className='home1' onClick={onhomeClick}>خانه</button></div>
                <div><button className='service1' onClick={onServiceClick}>سرویس ها</button></div>
                <div><button className='service1' onClick={onCarClick}>خودروها</button></div>
                <div><button className='service1' onClick={onaboutusClick}>درباره ما</button></div>
                <div><button className='service1' onClick={oncallClick}>تماس</button></div>
                <div> <button className='quesction2' onClick={onquestionsClick}>سوالات</button></div>
            </div>
    )
}

