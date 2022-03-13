
import React from 'react'

import './personalskills.css'

export default function PersonalSkills ({ params }) {
  const personalskills = (params ? params : []);
  return (
    <div className='PersonalSkills'>
      <div id={'personalskills'} className='title'>{personalskills.personal_title}</div>
      <div className='personalskills'>
        {
         personalskills.personal_values && personalskills.personal_values.map((item, index) => {
          return (<div id={'personalskills-' + index} className='skills'>{item}</div>)
        })
      }
      </div>
      </div>
  )
}
