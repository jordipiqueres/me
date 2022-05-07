
import React from 'react'

import './workexperience.css'

export default function WorkExperience ({ params }) {
  const workexperience = (params ? params : {'title': '', 'values': []});

  return (
    <div className='WorkExperience'>
      <div id={'workexperience-title'} className='title'>{workexperience.title}</div>
      { 
        workexperience.values && workexperience.values.map((item, index) => {
          return (
            <div key={'workexperience-' + index}>
              <div className='workexperience-group'>
                <div className='job'>{item.job}</div>
                <div className='position'>{item.position}</div>
                <div className='year'>{item.year}</div>
              </div>
              <ul> 
              {
                item.description.map((description, index) => {
                  return (<li key={'workexperience-' + index} className='description'>{description}</li>)
                })
              }
              </ul>
              
            </div>
          )

        })
      }
    
      
      </div>
  )
}
