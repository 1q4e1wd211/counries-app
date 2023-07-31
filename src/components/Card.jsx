import React from 'react'

const Card = (props) => {
  return (
    <div className='flex'>
        <div className='rounded-[12px] text-slate-900 my-[50px] mx-[50px] border-solid border-b border-black border-[2px]  w-[300px] shadow-xl shadow-black'>
            <img src={props.flags} alt="" className='w-[300px] border-black border-[1px] border-solid rounded-[10px]' />
            <div className='pl-[10px]'>name: {props.name}</div>
            <div className='pl-[10px]'>area: {props.area}</div>
            <div className='pl-[10px]'>capital: {props.capital}</div>
            <div className='pl-[10px]'>population: {props.population}</div>             
        </div>
    </div>
  )
}

export default Card