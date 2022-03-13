
import React from 'react'

import './education.css'

export default function Education ({ params }) {
  return (
    <div className='Education'>
      <div id='education-main' className='title'>{params.title_studies}</div>
      <div key={Math.random()} className='education-values'>
        <div id='education-center' className='center'>{params.bachelor_center}</div>
        <div id='education-name' className='name'>{params.bachelor_title}</div>
        <div id='education-year' className='year'>{params.bachelor_year}</div>
        { 
          params.bachelor_values && params.bachelor_values.map((item, index) => {

            return (
              <>
                <div id={'education-' + index} className='center'>{item.center}</div>
                <div id={'education-' + index} className='name'>{item.title}</div>
                <div id={'education-' + index} className='year'>{item.year}</div>
              </>
            )

          })
        }
      </div>
    
      </div>
  )
}
