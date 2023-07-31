import React from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
    const [countries, setCountries] = React.useState([])
    const {country} = useParams()

    React.useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/name/${country}`)
          .then(res => res.json())
          .then(([res]) => setCountries(res))
          .catch(err => console.error(err))
    }, [country])

    if(!countries.flags) return <h1>Loating</h1>
    return (
    <div className='w-[100%] h-[90.1vh] bg-[url(https://img5.goodfon.ru/wallpaper/nbig/b/8c/karta-mira-materiki-sinii-fon.jpg)] bg-center bg-cover pt-[100px] pl-[20px]'>
        <div className='flex'>
          <img src={countries.flags.svg} alt="" className='w-[300px]'/>
          <img src={countries.coatOfArms.svg} alt="" className='w-[140px]'/>
        </div>
        <div className='text-white'>
          <div>Имя страны: {countries.name.common}</div>
          <div>Cталиция: {countries.capital.map(item => <span key={item}>{item}</span>)}</div>
          <div>Ссылка на страну: <a className='underline-offset-[3px]' href={countries.maps.googleMaps}> google maps</a></div>
          <div>Континент: {countries.continents}</div>
          <div>Площадь: {countries.area}км²</div>
          <div>Население: {countries.population} человек</div>
        </div>
    </div>
  )
}

export default Country