import React from 'react'
import './Navbar.css'
import logowebp from '../components/image/logo.webp'
export default function Navbar({onServiceClick,onCarClick,onaboutusClick,oncallClick,onquestionsClick,onhomeClick, onMenuClick}) {
  return (
    <div id="Navbar" className="grid-Navbar">
      <div className='q'></div>
       <div> <button className='quesction' onClick={onquestionsClick}>سوالات</button></div>
       <div><button className='service' onClick={oncallClick}>تماس</button></div>
       <div><button className='service' onClick={onaboutusClick}>درباره ما</button></div>
        <div><img className='img' src={logowebp} alt="Logo"></img></div>
        <div><button className='service' onClick={onCarClick}>خودروها</button></div>
        <div><button className='service' onClick={onServiceClick}>سرویس ها</button></div>
        <div><button className='home' onClick={onhomeClick}>خانه</button></div>
        <i  class="fa fa-bars" id='iconrespanciv' style= {{ fontWeight: "bold"}} onClick={onMenuClick}></i>
    </div>
  )
}


