

import React, {useContext} from 'react'
import cookies from '../../data/cookies.png'
import './cookieconsent.css'

export default function CookieConsent ({ params }) {

  const handleConsent = (evt) => {
    const accepted = evt.target.value;
    document.cookie = `consentAccepted=${accepted}`
  }

  return (
    <div className='CookieConsentPanel'>
      <section className="CookiePolicy">
        <h1 className='Header'><img src={cookies} alt="Cookies"/>{ data.cookieTitle }</h1>
        <p className='Description'>{ data.cookieDescription } { data.policyTitle }</p>
        <button onClick={handleConsent} value='ca'>{ data.accept }</button> |
        <button onClick={handleConsent} value='es'>{ data.reject }</button>
      </section>
    </div>
  )
}
