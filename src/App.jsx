
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contactus' element={<ContactUs/>} />

    </Routes>
    </>
  )
}

export default App


