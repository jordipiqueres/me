
import React from 'react'

import './workexperience.css'

export default function WorkExperience ({ params }) {
  const workexperience = (params ? params : {'title': '', 'values': []});
  console.log(workexperience)
  return (
    <div className='WorkExperience'>
      <div id={'workexperience-title'} className='title'>{workexperience.title}</div>
      { 
        workexperience.values && workexperience.values.map((item, index) => {
          return (
            <>
              <div className='workexperience-group'>
                <div id={'workexperiencejob-' + index} className='job'>{item.job}</div>
                <div id={'workexperienceposition-' + index} className='position'>{item.position}</div>
                <div id={'workexperienceyear-' + index} className='year'>{item.year}</div>
              </div>
              <ul> 
              {
                item.description.map((description, index) => {
                  return (<li id={'workexperience-' + index} className='description'>{description}</li>)
                })
              }
              </ul>
              
            </>
          )

        })
      }
    
      
      </div>
  )
}
