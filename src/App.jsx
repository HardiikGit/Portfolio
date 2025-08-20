import { BrowserRouter, Route, Routes } from "react-router-dom"
import './css/theme.css'
import './css/Responsive.css'
import './css/Animation.css'
import HomePage from "./pages/HomePage"
import MyResume from "./pages/ResumePage"
import ContactMe from "./pages/ContactMePage"
import Project from "./pages/ProjectsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/resume" element={<MyResume />}></Route>
        <Route path="/contactme" element={<ContactMe />}></Route>
        <Route path="/projects" element={<Project />}></Route >
      </Routes >
    </BrowserRouter >
  )
}

export default App
