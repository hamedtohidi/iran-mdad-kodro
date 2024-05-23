import React, { useState } from 'react'
import './Footer.css'
import logowebp from '../components/image/logo.webp'
import phonewebp from '../components/image/phone.webp'

export default function Footer() {
    return (
        <div className='foter' id='footer'>
            <img className='setting' src={logowebp}></img>
            <div className='Description'>
                <div className='Descrip'>
                    <div className='setting6' style={{ direction: 'rtl', borderleft: 'none' }}>
                        <p className='pfont9'>
                            چیتگر<br />
                            <span className='written20'> شهرک اکباتان<br /></span>
                            <span className='written21'> شهرک اکباتان<br /></span>
                            آزادی<br />
                            <span className='written20'> سعادت آباد<br /></span>
                            <span className='written21'> سعادت آباد<br /></span>
                            <span className='written22'> حصارک<br /></span>
                            <span className='written23'> حصارک<br /></span>
                            <span className='written22'> فردوس<br /></span>
                            <span className='written23'> فردوس<br /></span>
                            <span className='written20'> شهرک غرب<br /></span>
                            <span className='written21'> شهرک غرب<br /></span>
                            <span className='written24'> دهکده المپیک<br /></span>
                            <span className='written25'> دهکده المپیک<br /></span>
                        </p>
                    </div>
                    <div className='setting4' style={{ direction: 'rtl', }}>
                        <h4 className='setting3'>مناطق</h4>
                        <p className='pfont1'>
                            <span className='written12'> پونک<br /></span>
                            <span className='written13'> پونک<br /></span>
                            صادقیه<br />
                            <span className='written14'> ستارخان<br /></span>
                            <span className='written15'> ستارخان<br /></span>
                            <span className='written14'> جنت آباد<br /></span>
                            <span className='written15'> جنت آباد<br /></span>
                            <span className='written14'> شهر زیبا<br /></span>
                            <span className='written15'> شهر زیبا<br /></span>
                            <span className='written16'> شهران<br /></span>
                            <span className='written17'> شهران<br /></span>
                            طرشت<br />
                            <span className='written18'> گیشا<br /></span>
                            <span className='written19'> گیشا<br /></span>
                        </p>
                    </div>
                </div>
                <div className='setting5' style={{ direction: 'rtl' }}>
                    <h4 className='setting7'>خدمات</h4>
                    <p className='pfont2'>

                        <span className='written'>  باطری به باطری سیار<br /> </span>
                        <span className='written1'> باطری به باطری سیار<br /> </span>
                        <span className='written2'> خدمات مکانیکی در محل<br /> </span>
                        <span className='written3'> خدمات مکانیکی در محل<br /> </span>
                        <span className='written4'> تعویض روغن در محل<br /> </span>
                        <span className='written5'> تعویض روغن در محل<br /> </span>
                        <span className='written6'> پنچرگیری سیار<br /> </span>
                        <span className='written7'> پنچرگیری سیار<br /> </span>
                        <span className='written4'> تعویض لنت در محل<br />    </span>
                        <span className='written5'> تعویض لنت در محل<br />   </span>
                        <span className='written8'> تعمیر کولر خودرو<br />  </span>
                        <span className='written9'> تعمیر کولر خودرو<br />   </span>
                        <span className='written4'> حمل خودرو با چرثقیل<br />   </span>
                        <span className='written5'> حمل خودرو با چرثقیل<br />   </span>
                        تعمیر دوربین‌های عقب و جلو<br />
                        <span className='written10'> تعمیر سیستم خنک کننده موتور </span>
                        <span className='written11'> تعمیر سیستم خنک کننده موتور </span>

                    </p>
                </div>
                <div className='setting1' style={{ direction: 'rtl' }}>
                    <p className='pfont3'>ما به شما اهمیت می‌ دهیم و تلاش<br />
                        می‌ کنیم تا رضایت شما را به دست<br />
                        <span className='par7'>بیاوریم. با ما تماس بگیرید تا<br /></span>
                        <span className='par8'>&nbsp;&nbsp;&nbsp;بیاوریم. با ما تماس بگیرید تا&nbsp;&nbsp;<br /></span>
                        همیشه به سفری آسوده بروید.
                    </p>
                    <div className='phone1'>
                        <div className='phone2'>
                            <img className='phonewebp' src={phonewebp}></img>
                        </div>
                        <div className='phone2'>
                            <p className='pfont'>تماس با متخصصین ما</p>
                            <a className='a' href='tel:09193961046' style={{ direction: 'ltr' }}>0919 396 1046</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className='handelphone' href='tel:09193961046' style={{ direction: 'ltr' }}> !برای تماس با ما کلیک کنید </a>
        </div >
    )
}
