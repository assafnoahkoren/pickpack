import './App.css'
import RoutingLayer from './core/RoutingLayer'
import { QueryLayer } from './core/QueryLayer'

function App() {
  
  return (
    <QueryLayer>
      <RoutingLayer/>
    </QueryLayer>
  )
}

export default App
