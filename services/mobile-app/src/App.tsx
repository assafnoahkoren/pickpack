import { useState } from 'react'
import './App.css'
import { showStatusBar, hideStatusBar } from './capacitor/statusBar'
import RoutingLayer from './core/RoutingLayer'

function App() {
  const [statusBarVisible, setStatusBarVisible] = useState(true)

  const toggleStatusBar = async () => {
    if (statusBarVisible) {
      await hideStatusBar()
      setStatusBarVisible(false)
    } else {
      await showStatusBar()
      setStatusBarVisible(true)
    }
  }

  return (
    <RoutingLayer/>
  )
}

export default App
