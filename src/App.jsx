import React from 'react'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Resume from './components/Resume'

const router = createBrowserRouter([
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
