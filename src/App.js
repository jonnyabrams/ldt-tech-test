import Home from './components/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RunnerDetails from './components/RunnerDetails.jsx'
import RaceDetails from './components/RaceDetails.jsx'
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/runners/:id" element={<RunnerDetails />} />
          <Route path="/races/:id" element={<RaceDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
