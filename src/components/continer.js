import React from 'react'
import './continer.css'
import orangeheart from '../components/image/Orange-heart.webp'
import phone from '../components/image/call.webp'
import couple from '../components/image/couple.webp'
import toolwebp from '../components/image/tool.webp'
import tool2webp from '../components/image/tool2.webp'
import tool3webp from '../components/image/tool3.webp'
export default function Continer() {
    return (
        <div className='grid-continer' id='grid-continer'>
            <div id='continer' className='continer'>
                <div className='abzar1'>
                    <span className='Tool1'>
                        <img className='icon' src={toolwebp}></img>کارآمد
                    </span>
                    <span className='Tool2'>
                        <img className='icon' src={tool2webp}></img>سختکوش
                    </span>
                </div>
                <div className='abzar'> <span className='Tool'> <img className='icon' src={tool3webp}></img>سریع</span>
                    <button className='namber'>
                        <a className='number' href='tel:09193961046'>0919 396 1046</a>
                    </button>
                </div>
            </div>
            <div>
                <div className='frame'>
                    <div className='frame1'>
                        <img className='cople' src={couple}></img>
                    </div>
                </div>
            </div>
            <div className='text'><span className='eshgh'>عشقی</span><span className='ka'> که <br class="responsive-break" /> ماشین شما<br />می خواهد</span><img className='heart' src={orangeheart} alt="heart"></img> <br class="responsive-break" />
                <div className='title'>
                    <span>تعمیر در محل با بهترین امکانات روز و</span><br class="responsive-break" />
                    <span>پشتیبانی ۲۴ ساعته با بیش از ۱۰ شعبه</span><br class="responsive-break" />
                    <span> &nbsp;در غرب و شمال  غرب تهران</span><br class="responsive-break" />

                </div>
                <div className="phone">

                    <button className="btn" >
                        <a className='call' href='tel:09193961046'>تماس بگیر</a>
                    </button>
                    <img className='icon' src={phone}></img>
                </div>
            </div>

        </div>
    )
}
