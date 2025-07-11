import React from 'react'
import Navbar from '../Components/navbar'
import Herosection from '../Components/herosection'
import Footer from '../Components/footer'
import Report from '../Components/Report'
import Faq from '../Components/FAQs'
import Join from '../Components/Join'
import OtpVerify from './OtpVerify'
import ReportSubmit from './ReportSubmit'

import Sponsors from '../Components/Sponsors'
import Sponsor from '../Components/Sponsor'

const Homepage = () => {
  return (
    <div>
    
      <Navbar />
      {/* < ReportSubmit /> */}
        <Herosection />
        <Report />
        <Sponsors />
        <Sponsor />
        <Join />
        <Faq />
        <Footer />
    </div>
  )
}

export default Homepage