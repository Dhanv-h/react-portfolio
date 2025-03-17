import React from 'react'
import Navbar from './Navbar'
import avatar from "../assets/avatar.webp"
import { skills } from './data'


const About = () => {
    return (
        <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
            <Navbar />
            <div className='mt-7'>
                <h1 className='text-white font-bold text-3xl mb-2'>About Me</h1>
                <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
                <div className='mt-5 md:hidden'>
                    <img src={avatar} alt="" className='bg-gray-700 rounded-2xl' />
                </div>
                <p className='mt-4 text-gray-300 text-xl font-semibold'>Hi! I'm Dhanvandhini S, an enthusiastic Software Developer with a keen interest in web technologies and databases. I have experience working with Java, Python, SQL, HTML, CSS, JavaScript, React, Git, GitHub, and Linux terminal, allowing me to build and manage efficient digital solutions.</p>
                <p className='mt-2 text-gray-300 text-xl font-semibold'>My journey into tech began from a non-IT background, and I've embraced every challenge to hone my skills in development, problem-solving, and teamwork. I'm constantly exploring new technologies and improving my skills to create impactful applications. When I’m not coding, I enjoy photography and art. Let’s connect and build something amazing together!</p>
                {/* service section */}
                <h1 className='text-2xl text-white font-bold mt-7'>Skills</h1>
                <div className='grid md:grid-cols-2 gap-6 mt-7'>
                    {
                        skills.map((item, index) => {
                            return <div className='bg-gray-700 border shadow p-5 text-white flex gap-5 items-start rounded-xl' key={index}>
                                <div className='text-6xl text-yellow-500'>
                                    {item.logo}
                                </div>
                                <div>
                                    <h1 className='font-bold text-2xl'>{item.title}</h1>
                                    <p className='text-xl text-gray-300'>{item.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About
