
import React from 'react'

import './personalinformation.css'

export default function PersonalInformation ({ params }) {
  return (
    <div className='PersonalInformation'>
      <div className='title'>{params.title_personalinfo}</div>
      <div className='values'>
        <div className='label'>{params.name_title}</div><div className='val'>{params.name_value}</div>
        <div className='label'>{params.birth_title}</div><div className='val'>{params.birth_value}</div>
        <div className='label'>{params.email_title}</div><div className='val'>{params.email_value}</div>
      </div>
    </div>
  )
}
