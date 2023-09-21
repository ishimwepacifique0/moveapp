import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({name,link,color,...rest}) {
  return (
    <div  className={`${color} rounded-lg px-2 text-white font-semibold text-lg cursor-pointer`} >
        <Link to={link}>{name}</Link>
      </div>
  )
}
