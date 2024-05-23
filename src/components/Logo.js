import React from 'react'
import './Logo.css'
import Brandcard from './Brandcard'
import Converted from '../components/image/8917 [Converted].png'
import Converted1 from '../components/image/8917 [Converted]1.png'
import svg1 from '../components/image/svg1.svg'
import svg2 from '../components/image/svg2.svg'
import svg3 from '../components/image/svg3.svg'
import svg4 from '../components/image/svg4.svg'
import svg5 from '../components/image/svg5.svg'
import svg6 from '../components/image/svg6.svg'
import svg7 from '../components/image/svg7.svg'
import svg8 from '../components/image/svg8.svg'
const image1 = [svg4, svg3, svg2, svg1]
const image2 = [svg8, svg7, svg6, svg5]
export default function Logo(props) {
  return (
    <div className='bacg'>
      <div className='log'>
        <img className='logo' src={Converted}></img>
        <img className='logo1' src={Converted1}></img>

        {image1.map((img, index) => {
          return <Brandcard key={index} img={img} index={index}>
          </Brandcard>
        })}

        {image2.map((img, index) => {
          return <Brandcard key={index} imgs={img} index={index}>
          </Brandcard>
        })}

      </div>
    </div>

  )
}
