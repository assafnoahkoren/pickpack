import './App.css'
import RoutingLayer from './core/RoutingLayer'
import { QueryLayer } from './core/QueryLayer'
import { GlobalStoresLayer } from './global-stores/GlobalStoresLayer'
import ThemeLayer from './core/ThemeLayer'

function App() {

  return (
    <QueryLayer>
      <ThemeLayer>
        <GlobalStoresLayer>
          <RoutingLayer />
        </GlobalStoresLayer>
      </ThemeLayer>
    </QueryLayer>
  )
}

export default App
