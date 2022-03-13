
import React from 'react'

import './technicalskills.css'

export default function TechnicalSkills ({ params }) {
  const technicalskills = (params ? params : []);
  console.log(technicalskills)
  return (
    <div className='TechnicalSkills'>
        <div id={'technicalskills'} className='title'>{technicalskills.skills_title}</div>
        <div className='technicalskills-group'>
        {
         technicalskills.skills && technicalskills.skills.map((skill, index) => {
            return(
            <>
              <div id={'technicalskills-' + index} className='label'>{skill.title}</div>
              <div>
              {
                
                skill.values && skill.values.map((item, index2) => {
                  return (
                    <div id={'technicalskills-' + index + '' + index2} className='skills'>{item}</div>
                  )                  
                })
              }  
              </div>
            </>
            )
          })
        }
        </div>
      </div>
  )
}
