import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ShirtPage from './pages/ShirtPage.jsx'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shirt" element={<ShirtPage/>}/>
      </Routes>
    </Router>
  );
}

export default App
