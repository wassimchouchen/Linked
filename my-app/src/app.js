import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'

function MyApp() {
  return (
    <div className="font-lato bg-light-1 min-h-screen flex flex-col">
       <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/auth/login' element={<Login />} /> 
        <Route path='/auth/register' element={<Register />} /> 
      </Routes>
    </Router>
    </div>
  )
}

export default MyApp
