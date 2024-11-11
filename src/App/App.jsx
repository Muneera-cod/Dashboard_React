import React from 'react'
import Main from '../Components/Pages/Main.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from '../Routes/Routes.jsx'
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App