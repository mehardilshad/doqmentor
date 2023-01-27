import styled from 'styled-components'
import './assets/css/style.css'

import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './AppRouter'

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
