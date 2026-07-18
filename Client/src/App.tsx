import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRouter from './routes'

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  )
}

export default App