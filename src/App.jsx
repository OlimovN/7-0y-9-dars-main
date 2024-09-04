import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Bookmarked from './pages/Bookmarked'
import Error from './pages/Error'

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/bookmarked" element={<MainLayout><Bookmarked /></MainLayout>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
