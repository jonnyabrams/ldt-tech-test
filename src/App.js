import Home from './components/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RunnerDetails from './components/RunnerDetails.jsx'
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/runners/:id" element={<RunnerDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
