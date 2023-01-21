import { useState } from 'react'
import './App.css'
import Sayhello from './Components/Sayhello'
import {useRoutes }from 'react-router-dom'
import routes from './Routes/Routes'


function App() {
  const router = useRoutes(routes)
  return (
    <div className="App">
      {router}
    </div>
  )
}

export default App
