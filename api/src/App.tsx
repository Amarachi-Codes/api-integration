
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Appwrapper from './components/appwrapper/Appwrapper'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Appwrapper/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
       
      </Routes>
    </>
  )
}

export default App
