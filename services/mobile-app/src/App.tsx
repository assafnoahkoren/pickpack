import './App.css'
import RoutingLayer from './core/RoutingLayer'
import { QueryLayer } from './core/QueryLayer'
import { GlobalStoresLayer } from './global-stores/GlobalStoresLayer'

function App() {

  return (
    <QueryLayer>
      <GlobalStoresLayer>
        <RoutingLayer />
      </GlobalStoresLayer>
    </QueryLayer>
  )
}

export default App
