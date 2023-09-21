import React from 'react'
import Card from '../card/card'
// import { objt } from '../card/obj'

export default function Home() {
   
  const objt = [
    {
        content:"Ever since we've been with Hostinger, it's been amazing. We've not really had any issues at all and if we ever do have a question, their customer service is incredible",
        story:'Read all full story',
        title:'CEO',
        name:'Elisa'
    },
    {
        content:"Ever since we've been with Hostinger, it's been amazing. We've not really had any issues at all and if we ever do have a question, their customer service is incredible",
        story:'Read all full story',
        title:'CEO',
        name:'Elisa'
    },
    {
        content:"Ever since we've been with Hostinger, it's been amazing. We've not really had any issues at all and if we ever do have a question, their customer service is incredible",
        story:'Read all full story',
        title:'CEO',
        name:'Elisa'
    }
]
  return (
    <div className='md:flex'>
        {
          objt.map((items,index)=>{
            return(
              <>
              <Card key={index} content={items.content} story={items.story} title={items.title} name={items.name} />
              </>
            )
          })
        }
    </div>
  )
}
