import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState([])
    const [password, setPasword] = useState([])
    const submitForm = (e) => {
        e.preventDefault()
        console.log('username' + username + 'password' + password)
    }
    return (
        <div>
            <div className='flex justify-center place-items-center'>
                <form className='my-12 p-4 w-96 border-gray-300 border rounded-lg shadow-2xl'>
                    <h1 className='my-6 text-center text-xl '>Login</h1>

                    <div className='grid grid-row-2 gap-3'>
                        <label className='text-md font-light'>Username</label>
                        <input type='username' value={username} onChange={(e) => { setUsername(e.target.value) }} name='username' className=' border py-2 px-2 border-gray-300 rounded-lg focus:border-0 dark:focus:border-gray-50 focus:ring-gray-100' placeholder='Username' />
                    </div>
                    <div className='grid grid-row-2 gap-3'>
                        <label className='text-md font-light'>Password</label>
                        <input type='password' value={password} onChange={(e) => { setPasword(e.target.value) }} name='Password' className=' border py-2 px-2 border-gray-300 rounded-lg focus:border-0 dark:focus:border-gray-50 focus:ring-gray-100 ' placeholder='Password' />
                    </div>
                    <div className='my-4'>
                        <Link to={'/home'}>
                            <input type='submit' name='Login' className=' colorbglogin w-full  py-2 px-2 text-white font-semibold rounded-lg focus:border-0 dark:focus:border-gray-50 focus:ring-gray-100 ' value={'Login'} />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
