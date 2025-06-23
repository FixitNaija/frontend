import React from 'react'
import Navbar from '../Components/navbar'
import Herosection from '../Components/herosection'
import Footer from '../Components/footer'
import Report from '../Components/Report'
import Faq from '../Components/FAQs'
import Join from '../Components/Join'
import Create from '../Pages/CreateAccount'
import Reset from './Reset'
import Sponsors from '../Components/Sponsors'

const Homepage = () => {
  return (
    <div>
      {/* <Reset /> */}
      <Navbar />
        <Herosection />
        <Report />
        <Sponsors />
        <Join />
        <Faq />
        <Footer />
    </div>
  )
}

export default Homepage