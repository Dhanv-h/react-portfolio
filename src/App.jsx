import React from 'react'
import Sidebar from './components/Sidebar'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Resume from './components/Resume'

const router = createHashRouter([
  {
    path:"/",
    element:<About/>
  },
  {
    path:"/resume",
    element:<Resume/>
  },
])

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
