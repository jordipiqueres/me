
import React from 'react'

import './other.css'

export default function Other ({ params }) {
  const otherskills = (params ? params : []);
  return (
    <div className='Other'>
      <div id={'otherskills'} className='title'>{otherskills.other_title}</div>
      <div className='otherskills'>
        {
         otherskills.other_values && otherskills.other_values.map((item, index) => {
          return (<div id={'otherskills-' + index} className='skills'>{item.title} {item.link}</div>)
        })
      }
      </div>
    </div>
  )
}
