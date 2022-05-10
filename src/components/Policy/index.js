

import React, {useContext} from 'react'
import './policy.css'

import data from '../../data/policy.json'

export default function Policy () {

  return (
    <div className='PolicyPanel'>
      <section className="CookiePolicy">
        <h1>{ data.title }</h1>
        <h2><a href={ data.link }>{ data.link }</a></h2>
        {
          data.mainSection && data.mainSection.map((item, index) => {
            return (
              <p className='Description'>{ item }</p>
            )
          })
        }
        <h3>{ data.titleOwncookies }</h3>
        {
          data.sectionOwncookies && data.sectionOwncookies.map((item, index) => {
            return (
              <p className='Description'>{ item }</p>
            )
          })
        }
        <h3>{ data.titleThirdcookies }</h3>
        {
          data.sectionThirdcookies && data.sectionThirdcookies.map((item, index) => {
            return (
              <p className='Description'>{ item }</p>
            )
          })
        }
        <h3>{ data.titleRemovingcookies }</h3>
        {
          data.sectionRemovingcookies && data.sectionRemovingcookies.map((item, index) => {
            return (
              <p className='Description'>{ item }</p>
            )
          })
        }
      </section>
    </div>
  )
}
