import { BrowserRouter, Route, Routes } from "react-router-dom"
import './css/theme.css'
import './css/Responsive.css'
import HomePage from "./pages/HomePage"
import MyResume from "./pages/ResumePage"
import ContactMe from "./pages/ContactMePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/resume" element={<MyResume />}></Route>
        <Route path="/contactme" element={<ContactMe />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
