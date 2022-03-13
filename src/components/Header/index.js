
import PhotoOfMe from '../../components/PhotoOfMe'
import React from 'react'

import './header.css'

export default function Header ({ params, photo }) {
  return (
    <div className='HeaderPack'>
      <div className='Header'>{params.title}</div>
      <PhotoOfMe params={photo}></PhotoOfMe>
    </div>
  )
}
