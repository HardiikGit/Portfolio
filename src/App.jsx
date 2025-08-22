import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
import './css/theme.css'
import './css/Responsive.css'
import HomePage from './pages/HomePage'
import MyResume from './pages/ResumePage'
import ContactMe from './pages/ContactMePage'
import Project from './pages/ProjectsPage'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Takes 3s on Page Reload 
  }, []);
  return (
    <BrowserRouter>
      <Router basename='/portfolio'>
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/resume" element={<MyResume />}></Route>
          <Route path="/contactme" element={<ContactMe />}></Route>
          <Route path="/projects" element={<Project />}></Route >
        </Routes >
      </Router>
    </BrowserRouter >
  )
}

export default App;
