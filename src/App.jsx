import React from 'react'
import Card from './components/Card'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Countries from './pages/Countries'
import Country from './pages/Country'


const App = () => {
  const [countries, setCountries] = React.useState([])
  const [region, setRegion] = React.useState('africa')

  React.useEffect(() =>{
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then(res => res.json())
      .then(res => setCountries(res))
      .catch(err => console.error(err))
  }, [region])

  return (
    <div>
      <Sidebar setRegion={setRegion}/>
      <Routes>
        <Route path='/:country' element={<Countries/>}/>
        <Route path='/country/:country' element={<Country/>}/>
      </Routes>
    </div>
  )
}

export default App