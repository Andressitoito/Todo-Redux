import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/ui/Navbar'
import { AddTodo, Home } from './pages'
import { EditPage } from './pages/EditPage'

function App() {

 return (
  <div className="App">
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/add-todo' element={<AddTodo />} />
    <Route path='/edit-todo/:id' element={<EditPage />} />
    <Route />
   </Routes>
  </div>
 )
}

export default App
