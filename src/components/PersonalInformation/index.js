
import React from 'react'
import PhotoOfMe from '../../components/PhotoOfMe'
import './personalinformation.css'

export default function PersonalInformation ({ params, photo }) {
  return (
    <div className='PersonalInformation'>
      <div className='photo'>
        <PhotoOfMe params={photo}></PhotoOfMe>
      </div>
      <div className='details'>
        <div className='title'>{params.title_personalinfo}</div>
        <div className='values'>
          <div className='label'>{params.name_title}</div><div className='val'>{params.name_value}</div>
          <div className='label'>{params.birth_title}</div><div className='val'>{params.birth_value}</div>
          <div className='label'>{params.email_title}</div><div className='val'>{params.email_value}</div>
        </div>
      </div>
    </div>
  )
}
