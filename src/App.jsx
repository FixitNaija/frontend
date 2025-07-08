  import React from 'react'
  // import './index.css'
  import { Routes, Route} from 'react-router'
  import Homepage from './Pages/Homepage'
  import CreateAccount from './Pages/CreateAccount'
  import AboutUs from './Pages/AboutUs'
  import FAQs from './Components/FAQs'
  import Issue from './Pages/Issue'
  import UserPage from './Pages/UserPage'
  import './App.css'
  import Reset from './Pages/Reset'
  import Verify from './Pages/Verify'
  import UserIssue from './Pages/UserIssue'


  import { GoogleOAuthProvider } from '@react-oauth/google';
import OtpVerify from './Pages/OtpVerify'
import DashboardLayout from './Components/DashboardLayout'

  const clientId = '520912190280-qrqi24j6n2mql9et0h5usdgt40370alg.apps.googleusercontent.com';

  // 




  const App = () => {
    return (
      <div>
        
    

        <GoogleOAuthProvider clientId={clientId}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Signup" element={<CreateAccount />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/OtpVerify" element={<OtpVerify />} />
          <Route path="/Issue" element={<Issue />} />
          <Route path="/FAQs" element={<FAQs />} />
          {/* <Route path="/UserPage" element={<UserPage />} />
          <Route path="/UserIssue" element={<UserIssue />} /> */}
          <Route path="/" element={<DashboardLayout />}>
  <Route path="UserPage" element={<UserPage />} />
  <Route path="UserIssue" element={<UserIssue />} />
  {/* Add more routes as needed */}
</Route>

        </Routes>
        </GoogleOAuthProvider>
      </div>
    )
  }

  export default App