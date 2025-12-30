import React from 'react'
import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Index from './pages';
import Create from './pages/Create';
import View from './pages/View';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Index />}/>
          <Route path='/create' element={ <Create />}/>
          <Route path='/view/:bookId' element={ <View />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
