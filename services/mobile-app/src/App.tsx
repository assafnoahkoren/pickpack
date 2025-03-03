import { useState } from 'react'
import './App.css'
import { showStatusBar, hideStatusBar } from './capacitor/statusBar'

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
    <div className="app-container">
      <h1>PickPack Mobile App</h1>
      
      <div className="controls">
        <button onClick={toggleStatusBar}>
          {statusBarVisible ? 'Hide Status Bar' : 'Show Status Bar'}
        </button>
        <p className="hint">This button only works on native mobile devices</p>
      </div>
    </div>
  )
}

export default App
