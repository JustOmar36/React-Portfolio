import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import WorkExperience from './pages/WorkExperience';
import WebDevelopment from './pages/WebDevelopment';
import GameDevelopment from './pages/GameDevelopment';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/game-development" element={<GameDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;