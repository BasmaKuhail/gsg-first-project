import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer'
import MainContent from './components/maincontent'
import Header from './components/header'
import SideNav from './components/sidenav'
import ToDoLsit from './components/person'
import Profile from './components/Profile'
function App() {

  return (
    <>
      {/* <Header/>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <SideNav/>
        <p>=============================</p>
        <MainContent/>
      </div>
      
      <Footer/> */}
      <Profile/>
    </>
  )
}

export default App
