
import React from 'react'

import './education.css'

export default function Education ({ params }) {
  return (
    <div className='Education'>
      <div id='education-main' className='title'>{params.title_studies}</div>
      <div key={Math.random()} className='education-header'>
        <div id='education-center' className='center'>{params.bachelor_center}</div>
        <div id='education-name' className='name'>{params.bachelor_title}</div>
        <div id='education-year' className='year'>{params.bachelor_year}</div>
      </div>
      { 
          params.bachelor_values && params.bachelor_values.map((item, index) => {
          return (
            <div key={'education-' + index} className='education-values'>
              <div className='center'>{item.center}</div>
              <div className='name'>{item.title}</div>
              <div className='year'>{item.year}</div>
            </div>
          )

        })
      }
      </div>
  )
}
