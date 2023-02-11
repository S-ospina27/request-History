import { useState } from 'react'
// import './App.css'
import { Route,Routes } from 'react-router-dom'
import Register from './pages/Register'
import { ThemeProvider } from '@mui/material'
import Styles from "./components/tools/Styles";
import { Create } from '@mui/icons-material';
import CreateRequirements from './pages/CreateRequirements';
import Requeriments from './pages/Requeriments';
function App() {

  return (
    <ThemeProvider theme={Styles}>
<<<<<<< HEAD
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/create' element={<CreateRequirements/>} />
      <Route path='/' element={<Requeriments/>} />
    </Routes>
=======
      <Routes>
        <Route path='/' element={<Register/>} />

        <Route path='/create' element={<CreateRequirements/>} />
      </Routes>
>>>>>>> 682a5719716426f3d5cf19ddb4695fad4cb7b9fa
  </ThemeProvider>
  )
}

export default App
