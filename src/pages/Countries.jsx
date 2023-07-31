import React from  'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

const Countries = () => {
    const [countries, setCountries] = React.useState([])
    const { country } = useParams()

    React.useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/region/${country}`)
          .then(res => res.json())
          .then(res => setCountries(res))
          .catch(err => console.error(err))
      }, [country])

  return (
    <div className='pl-[100px] flex flex-wrap justify-center px-6 py-4 bg-[url(https://img5.goodfon.ru/wallpaper/nbig/b/8c/karta-mira-materiki-sinii-fon.jpg)] bg-center bg-cover bg-fixed'>
        {countries.map(country => (
          <Card 
            name={country.name.common} 
            area={country.area}
            flags={country.flags.svg}
            capital={country.capital}
            population={country.population}
            gerb ={country.coatOfArms.svg}
          />
        ))}
      </div>
  )
}

export default Countries