import React, { useState, useEffect, useContext } from "react"
import dataME from '../../data/me.json'
import dataCA from '../../data/me-ca.json'
import dataES from '../../data/me-es.json'
import dataEN from '../../data/me-en.json'
import PersonalInformation from '../../components/PersonalInformation'
import Education from '../../components/Education'
import WorkExperience from '../../components/WorkExperience'
import TechnicalSkills from '../../components/TechnicalSkills'
import PersonalSkills from '../../components/PersonalSkills'
import Languages from '../../components/Languages'
import Other from '../../components/Other'
import Prizes from '../../components/Prizes'
import SocialMedia from '../../components/SocialMedia'
import LanguageContext from '../../context/LanguageContext'
import photo from '../../data/me.jpg' // Tell webpack this JS file uses this image
import CookieConsent from '../../components/CookieConsent'

const Home = () => {
  const [personalinformation, setPersonalInformationValues] = useState(0)
  const [education, setEducationValues] = useState(0)
  const [workexperience, setWorkExperienceValues] = useState(0)
  const [technicalskills, setTechnicalSkillValues] = useState(0)
  const [personalskills, setPersonalSkillValues] = useState(0)
  const [languages, setLanguageValues] = useState(0)
  const [other, setOtherValues] = useState(0)
  const [prizes, setPrizeValues] = useState(0)
  const [socialmedia, setSocialMedia] = useState(0)
  const [photoofme, setPhotoValues] = useState(0)
  const [data, setData] = useState([])
  const {language , setLanguage} = useContext(LanguageContext)

  const supportedLang = ['ca', 'es', 'en']
  const languagesData = {
    'ca': dataCA,
    'es': dataES,
    'en': dataEN,
  }
  const dataLang = (!language || !supportedLang.includes(language) ? (!supportedLang.includes(navigator.language) ? dataME : languagesData[navigator.language]) : languagesData[language])

  useEffect(() => {
    setData(dataLang)
    setPersonalInformationValues(dataLang.personalinformation)
    setEducationValues(dataLang.education)
    setWorkExperienceValues(dataLang.workexperience)
    setTechnicalSkillValues(dataLang.technicalskills)
    setPersonalSkillValues(dataLang.personalskills)
    setLanguageValues(dataLang.languages)
    setOtherValues(dataLang.other)
    setPrizeValues(dataLang.prizes)
    setSocialMedia(dataLang.socialmedia)
    setPhotoValues(photo)
  }, [dataLang])

return (
    <div className="container-of-me">
      <PersonalInformation params={personalinformation} photo={photoofme}></PersonalInformation>
      <Education params={education}></Education>
      <WorkExperience params={workexperience}></WorkExperience>
      <TechnicalSkills params={technicalskills}></TechnicalSkills>
      <PersonalSkills params={personalskills}></PersonalSkills>
      <Languages params={languages}></Languages>
      <Other params={other}></Other>
      <Prizes params={prizes}></Prizes>
      <SocialMedia params={socialmedia}></SocialMedia>
  </div>
)
}
export default Home;