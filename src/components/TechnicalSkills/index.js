
import React from 'react'

import './technicalskills.css'

export default function TechnicalSkills ({ params }) {
  const technicalskills = (params ? params : []);

  return (
    <div className='TechnicalSkills'>
        <div className='title'>{technicalskills.skills_title}</div>
        <div className='technicalskills-group'>
        {
         technicalskills.skills && technicalskills.skills.map((skill, index) => {
            return(
            <div key={'technicalskills' + index}>
              <div key={'technicalskills-title' + index} className='label'>{skill.title}</div>
              <div key={'technicalskills-list' + index}>
              {
                
                skill.values && skill.values.map((item, index2) => {
                  return (
                    <div key={'technicalskills-' + index + '' + index2} className='skills'>{item}</div>
                  )                  
                })
              }  
              </div>
            </div>
            )
          })
        }
        </div>
      </div>
  )
}
