import React, { useState } from 'react';
import './contineu.css'
import Card from './Card';
import service1webp from '../components/image/service1.webp'
import service2webp from '../components/image/service2.webp'
import service3webp from '../components/image/service3.webp'
import service4webp from '../components/image/service4.webp'
import service5webp from '../components/image/service5.jpg'
import service6webp from '../components/image/service6.webp'

const img = [service1webp, service2webp, service3webp, service4webp, service5webp, service6webp]
const h = ['خدمات روغن و سیالات ', 'خدمات بالانس چرخ', 'خدمات تعمیرات اساسی', 'سرویس دوره ای خودرو', 'خدمات باطری', 'شمع و وایر خودرو']
const para = ['پس از مشاهده نشانه های تعویض روغن باید روغن خودرو تعویض گردد. عدم تعویض به موقع باعث آسیب رساندن به خودرو میگردد. از خدمات سرویس دوره ای ایران امداد خودرو خدمات تعویض روغن است.',
  'خدمات بالانس چرخ از طریق تنظیم و تعادل صحیح چرخ‌های خودرو، لرزش‌ها و ارتعاشات غیرمطلوب را کاهش داده و عمر لاستیک‌ها را افزایش می‌دهد. ایران امداد خودرو این کار را برای شما انجام می‌دهد.',
  'خدمات تعمیرات اساسی شامل تعمیر و نگهداری موتور، سیستم‌های الکتریکی و الکترونیکی، جلوبندی، ترمز، سیستم تعلیق، و سایر قطعات اساسی خودرو می‌باشد که ایران امداد خودرو همه‌ی این‌ها را ارائه می‌دهد.',
  'یکی از بهترین راه های جلوگیری از خرابی خودرو انجام سرویس دوره ای خودرو می باشد. ایران امداد خودرو هر این سرویس را برای شما انجام می‌دهد.',
  'خدمات باطری شامل تست و تشخیص وضعیت باطری، شارژ باطری، تعویض باطری، بررسی سیستم‌های شارژ و استارت، و ارائه مشاوره در مورد نگهداری و استفاده بهینه از باطری خودرو می‌باشد.',
  'تعویض به موقع شمع و وایر خودرو از اهمیت بالایی برخوردار است و با استفاده از خدمات تعویض این قطعات از جنس اورجینال می‌توانید از خطرات بروزی در خودرو و سلامتی سرنشینان جلوگیری کنید.']

export default function Contineu() {
  const [open, setopen] = useState(false)
  const handelopen = () => {
    setopen(!open);
  }

  return (
    <div className='contineu' >
      <div className='text1'>سرویس‌ها</div>
      <div className='row' id='contineu'>
        {img.slice(0, 3).map((img, index) => (
          <Card
            key={index}
            img={img}
            h={h[index]}
            para={open ? para[index] : ''}
          />
        ))}
      </div>
      {open && (
        <div className='row'>
          {img.slice(3).map((img, index) => (
            <Card
              key={index}
              img={img}
              h={h[index + 3]}
              para={open ? para[index + 3] : ''}
            />
          ))}
        </div>
      )}
      <button className='Services' onClick={handelopen}>
        {open ? 'بستن' : 'مشاهده خدمات بیشتر'}
      </button>
    </div>
  )
}
