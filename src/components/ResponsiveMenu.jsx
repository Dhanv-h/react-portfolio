import React from 'react'
import avatar from "../assets/avatar.webp"
import { FaRegEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const ResponsiveMenu = ({ open, setOpen }) => {
    return (
        <div className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 px-4 pb-6 pt-6 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <div className='bg-gray-600 rounded-md p-4'>
                <div className='rounded-xl p-3 flex items-center justify-center'>
                    <img src={avatar} alt="Profile Avatar" className='w-[200px] bg-gray-700 rounded-2xl' />
                </div>
                <h1 className='text-white font-bold text-center text-3xl my-2'>Dhanvandhini S</h1>
                <p className='text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7'>Software Developer</p>
                <hr className='text-gray-700 mx-4 border-2' />

                <nav className='mt-5'>
                    <ul className='flex flex-wrap text-center gap-2 items-center justify-center text-white text-xl font-semibold'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`} onClick={() => setOpen(false)}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume" className={({ isActive }) => `${isActive ? "text-yellow-500" : "text-white"} cursor-pointer`} onClick={() => setOpen(false)}>
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='mt-7 px-4 space-y-7'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaRegEnvelope className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>EMAIL</h1>
                            <p className='text-gray-200'>dhanvhari@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaGithub className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>GITHUB</h1>
                            <a href="https://github.com/Dhanv-h" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:underline'>github.com/Dhanv-h</a>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaLinkedin className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>LINKEDIN</h1>
                            <p className='text-gray-200'>(Link will be available soon)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu