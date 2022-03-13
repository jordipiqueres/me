
import React from 'react'

import './socialmedia.css'

export default function SocialMedia ({ params }) {
  const socialmedia = params;
  return (
    <div className='SocialMedia'>
      <div className='title'>{socialmedia.social_title}</div>
      {
         socialmedia.links && socialmedia.links.map((item, index) => {
          return (
          <div id={'socialmedia-' + index} className='socialmedia'>
            <a href={item.link} target='_blank'><img src={item.img} className='socialmedia-banner' style={{width: `${item.width}`}}></img></a>
            </div>
          )
        })
      }
    </div>
  )
}
