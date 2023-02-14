import { useState } from 'react'
// import './App.css'
import { Route,Routes } from 'react-router-dom'
import Register from './pages/Register'
import { ThemeProvider } from '@mui/material'
import Styles from "./components/tools/Styles";
import { Create } from '@mui/icons-material';
import CreateRequirements from './pages/CreateRequirements';
import Requeriments from './pages/Requeriments';
import CreateAssignments from './pages/CreateAssignments';
import AssignDevelopers from './pages/AssignDevelopers';
function App() {

  return (
    <ThemeProvider theme={Styles}>
      <Routes>
        <Route path='/' element={<Requeriments/>} />
        <Route path='/create-assignments' element={<CreateAssignments/>} />
        <Route path='/Developers-assignments' element={<AssignDevelopers/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/create' element={<CreateRequirements/>} />
      </Routes>
  </ThemeProvider>
  )
}

export default App
