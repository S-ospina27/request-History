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
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/create' element={<CreateRequirements/>} />
      <Route path='/' element={<Requeriments/>} />
    </Routes>
  </ThemeProvider>
  )
}

export default App
