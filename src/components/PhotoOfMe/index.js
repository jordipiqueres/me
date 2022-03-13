
import React from 'react'

import './photoofme.css'

export default function PhotoOfMe ({ params }) {
  const img = params;
  return (
    <img src={img} className='PhotoOfMe'/>
  )
}
