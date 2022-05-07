

import React, {useContext} from 'react'
import LanguageContext from '../../context/LanguageContext'

import './header.css'

export default function Header ({ params }) {

  const {language , setLanguage} = useContext(LanguageContext)

  const handleLanguage = (evt) => {
    const selectedLang = evt.target.value;
    setLanguage(selectedLang)
  }

  return (
    <div className='HeaderPack'>
      <section className="language-selector">
        <button onClick={handleLanguage} value='ca'>Català</button> |
        <button onClick={handleLanguage} value='es'>Español</button>
      </section>
      <h1 className='Header'><a href='https://jordipiqueres.github.io/'>jordipiqueres.github.io</a> | {params.name}</h1>
      <h2 className='Header'>{params.description}</h2>
      
    </div>
  )
}
