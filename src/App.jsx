import React from 'react'
// import './index.css'
import { Routes, Route} from 'react-router'
import Homepage from './Pages/Homepage'
import CreateAccount from './Pages/CreateAccount'
import AboutUs from './Pages/AboutUs'
import FAQs from './Components/FAQs'
import ReportIssue from './Pages/ReportIssue'
import './App.css'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<CreateAccount />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      
        <Route path="/Issue" element={<ReportIssue />} />
        <Route path="/FAQs" element={<FAQs />} />

      </Routes>
    </div>
  )
}

export default App