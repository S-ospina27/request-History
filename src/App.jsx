import { useState } from 'react'
// import './App.css'
import { Route,Routes } from 'react-router-dom'
import Register from './pages/Register'
import { ThemeProvider } from '@mui/material'
import Styles from "./components/tools/Styles";

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={Styles}>
    <Routes>
      <Route path='/' element={<Register/>}>

      </Route>
    </Routes>
  </ThemeProvider>
  )
}

export default App
