
import React from 'react'
import { MdLink } from 'react-icons/md'
import './prizes.css'

export default function Prizes ({ params }) {
  const prizes = params;
  return (
    <div className='Prizes'>
      <div className='title'>{prizes.prizes_title}</div>
      <div className='prizesskills'>
      {
         prizes.prizes_values && prizes.prizes_values.map((item, index) => {
          return (<div key={'prizes-' + index} className='prize'>{item.title} <a href={item.link}><MdLink></MdLink></a></div>)
        })
      }
      </div>
    </div>
  )
}
