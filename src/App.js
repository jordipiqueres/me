import React, { useState, useEffect } from "react";
import data from './data/me.json';
import photo from './data/me.jpg'; // Tell webpack this JS file uses this image
import Header from './components/Header';
import PersonalInformation from './components/PersonalInformation';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import TechnicalSkills from './components/TechnicalSkills';
import PersonalSkills from './components/PersonalSkills';
import Languages from './components/Languages';
import Other from './components/Other';
import Prizes from './components/Prizes';
import SocialMedia from './components/SocialMedia';

const App = () => {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState(0)


  const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
  }
  const [header, setHeaderValues] = useState(0)
  const [photoofme, setPhotoValues] = useState(0)
  const [personalinformation, setPersonalInformationValues] = useState(0)
  const [education, setEducationValues] = useState(0)
  const [workexperience, setWorkExperienceValues] = useState(0)
  const [technicalskills, setTechnicalSkillValues] = useState(0)
  const [personalskills, setPersonalSkillValues] = useState(0)
  const [languages, setLanguageValues] = useState(0)
  const [other, setOtherValues] = useState(0)
  const [prizes, setPrizeValues] = useState(0)
  const [socialmedia, setSocialMedia] = useState(0)

  useEffect(() => {
    console.log(data)
    setHeaderValues(data.header)
    setPhotoValues(photo)
    setPersonalInformationValues(data.personalinformation)
    setEducationValues(data.education)
    setWorkExperienceValues(data.workexperience)
    setTechnicalSkillValues(data.technicalskills)
    setPersonalSkillValues(data.personalskills)
    setLanguageValues(data.languages)
    setOtherValues(data.other)
    setPrizeValues(data.prizes)
    setSocialMedia(data.socialmedia)
  }, [data])

return ( 
  <>
  <Header params={header} photo={photoofme}></Header>
  <div className="container-of-me">
    <PersonalInformation params={personalinformation}></PersonalInformation>
    <Education params={education}></Education>
    <WorkExperience params={workexperience}></WorkExperience>
    <TechnicalSkills params={technicalskills}></TechnicalSkills>
    <PersonalSkills params={personalskills}></PersonalSkills>
    <Languages params={languages}></Languages>
    <Other params={other}></Other>
    <Prizes params={prizes}></Prizes>
    <SocialMedia params={socialmedia}></SocialMedia>
  </div>
  </>
)
}
export default App;