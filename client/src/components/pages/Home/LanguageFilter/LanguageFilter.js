import React, {useState, useEffect} from 'react'

function LanguageFilter({updateLanguage}) {

  const [allLanguages, setAllLanguages] = useState([])

  const getAllLanguages = () => {
    fetch('http://localhost:5000/movies/languages')
    .then(res => res.json())
    .then(res => {         
      setAllLanguages(res);
    })
  }  

  useEffect(() => {
    getAllLanguages()   
  }, [])

  const handleChange = (event) => {
    updateLanguage(event.target.value)
  }

  return (
    <select className='select-custom' name="selectLanguage" onChange={handleChange}>
      <option key='any' value='any'>Any</option>
      {allLanguages.map(language => (
          <option key={language} value={language}>{language}</option>  
        ))}      
    </select>      
  )
}

export default LanguageFilter
