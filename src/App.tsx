import { useState } from 'react'
import NavBarComponent from './components/NavBarComponent'
import BannerComponent from './components/BannerComponent'
import HamburguerMenuComponent from './components/HamburguerMenuComponent'
import './App.css'

function App() {
  
  return (
    <>
     <div>
      <BannerComponent />
      <HamburguerMenuComponent />
     </div>
    </>
  )
}

export default App
