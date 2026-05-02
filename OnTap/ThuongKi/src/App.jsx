
import {Routes, Route} from "react-router-dom"
import { Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <>
  
    <nav>
      <ul>
        <li>
          <Link to ="/"> Home</Link>
        </li>
        <li>
          <Link to="/News"> News</Link>
        </li>
        <li>
          <Link to="/Contact"> Contact</Link>
        </li>
      </ul>
    </nav>

      <Routes>
      <Route path='/' element={<Home /> }> </Route>
      <Route path="/News" element={<News/>}>  </Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>

   
    </>
  )
}

export default App
