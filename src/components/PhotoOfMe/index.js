
import React, { useState, useEffect } from "react";
import './photoofme.css'

export default function PhotoOfMe ({ params }) {

  const [img, setImg] = useState(false)
  useEffect(() => {
    setImg(true)
  }, [params])

  return (
    <>
    {img &&
      <img src={params} className='PhotoOfMe' alt='Jordi Piqueres Bautista'/>
    }
    </>
  )
}
