import React from 'react'
import Drawcard from './Drawcard'
import './Draw.css'

const buttonTexts = [' آیا ایران امداد خودرو خدمات 24/7 ارائه می‌دهد؟', 'چه تضمین‌هایی ایران امداد خودرو ارائه می‌دهد؟'];
const buttonText = ['چه خدماتی ایران امداد خودرو ارائه می‌دهد؟', 'آیا ایران امداد خودرو دارای خدمات تعمیرات در محل است؟'];
const textbutton = ['بله، ما خدمات 24/7 را ارائه می‌دهیم و در هر زمانی که به ما نیاز دارید، در دسترس هستیم تا به شما کمک کنیم ', ' ما تضمین می‌کنیم که خدمات ما با کیفیت بالا، قابل اعتماد و با قیمت منصفانه ارائه می‌شوند.']
const textsbutton = ['ما خدمات گسترده‌ای را ارائه می‌دهیم که شامل تعمیرات معمولی و اضطراری، تعویض لاستیک، باطری‌های خودرو و خدمات رفع اشکال الکتریکی و مکانیکی است', 'بله، ما خدمات تعمیرات در محل را ارائه می‌دهیم. این به شما امکان می‌دهد که بدون نیاز به حمل و نقل خودرو، مشکلات خودروی خود را در جایی که هستید حل کنید']

export default function Draw() {
    return (
        <div className='draw' style={{ direction: 'rtl' }}>
            <h4 className='h'>سوالات متداول</h4>
            <div className='drawdon'>
                {buttonTexts.map((text, index) => (
                    <Drawcard
                        text={text}
                        p={textbutton[index]}
                    />
                ))}
            </div>

            <div className='drawdon'>
                {buttonText.map((text, index) => (
                    <Drawcard
                        text={text}
                        p={textsbutton[index]}
                    />
                ))}
            </div>
        </div>
    )
}
