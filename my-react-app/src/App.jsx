import { useState } from 'react'
import Header from './components/layout/Header/Header'
import WelcomeSection from './components/layout/sections/WelcomeSection/WelcomeSection'
import Button from './components/UI/Buttons/Button/Button'
import PhotoAndH from './components/UI/PhotoAndH/PhotoAndH'

import gymp from "./assets/images/p1.jpg"
import PhotoSection from './components/layout/sections/PhotoSection/PhotoSection'
import MainPage from './pages/MainPage/MainPage'
import Footer from './components/layout/Footer/Footer'

function App() {

  return (
    <div>
      <Header />
      <MainPage/>
      <Footer />

    </div>
  )
}

export default App
