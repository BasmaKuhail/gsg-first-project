import { useState } from 'react'
import './App.css'

import ChangeText from './components/reactHooks/UseState'
import UseEffect from './components/reactHooks/UseEffect'
import USeRef from './components/reactHooks/UseRef'
import UseMemo from './components/reactHooks/UseMemo'
import USeCallBack from './components/reactHooks/UseCallBack'
import Button from './components/TypeScript/Button'
function App() {

  return (
    <Button onClick={() => console.log("clicker")}>Click HEre!!!</Button>
  )
}

export default App
