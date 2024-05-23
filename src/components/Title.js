import React from 'react'
import './Title.css'
import car from '../components/image/car.webp'

export default function Title() {
    return (
        <div className="Title" id='titel'>
            <div className='title1'>
                <img className='car' src={car}></img>
                <div className="title2">
                    <h3 style={{ direction: 'rtl' }}>چرا ایران امداد خودرو؟</h3>
                    <p className='fontp' style={{ direction: 'rtl' }}>ایران امداد خودرو با رویکرد مشتری‌مدار و هزینه‌های استاندارد <br className='Description1' />اتحادیه، خدمات خود را به امدادجویان عزیز ارائه می‌دهد. تجربه‌ی ما<br className='Description1' /> به&nbsp;<br className='Description2' />
                        ما اجازه می‌دهد تا مشکلات خودروی شما را بدون افزودن هزینه‌های <br className='Description1' /> اضافی به سرعت حل کنیم. امیدواریم با ارائه خدماتمان، آرامش و<br className='Description2' /><br className='Description1' /> 
                        رضایت شما هموطنان عزیز را فراهم سازیم.
                    </p>
                </div>
            </div>
            <div className='titl'>
                <div className='title1'>
                    <div className="title2">
                        <h3 style={{ direction: 'rtl' }}>درباره ما</h3>
                        <p className='fontp' style={{ direction: 'rtl' }}>ایران امداد خودرو با سال‌ها سابقه در زمینه امداد خودرو، به عنوان یکی از برترین ارائه دهندگان خدمات در حوزه تعمیرات و امداد<br className='Description2'  /><br className='Description1' />
                            رانندگی شناخته می‌شود. ما فعالیت‌هایمان را به ویژه در جاده‌های تهران، به ویژه در مناطق غربی تهران، انجام می‌دهیم.
                        </p>
                    </div>
                    <h3 className='txt'>راهکارهای هوشمند برای خودروی شما</h3>

                </div>

            </div>
        </div>
    )
}
