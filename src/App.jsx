import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import ContactMe from './pages/ContactMe'; // Import the new Contact Me page
import Projects from './pages/Projects';
import Board from './pages/Board';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/2048" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App;