import React from 'react'
import { FaStar } from 'react-icons/fa'
export default function Card({content,story,title,name}) {
    return (
        <div className='my-12 px-12 w-full'>
            <div className='border rounded-lg border-sky-200 md:flex lg:flex-col'>
                <div className='p-8 flex flex-col gap-6 '>
                    <div className='flex gap-2 text-blue-900'>
                        <FaStar />
                        <FaStar  />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className='text-blue-950 text-sm'>
                        {content}
                    </div>
                    <div className='text-blue-900 font-semibold'>{story}</div>
                </div>
                <div className='flex py-4 bg-sky-50 flex-row place-items-center items-center px-2'>
                    <img src='./profile.PNG' alt='HEllo' className='h-16 ml-7' />
                    <div className='ml-7'>
                        <h1 className='text-blue-900 font-semibold'>{title}</h1>
                        <p className='text-blue-950'>{name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
