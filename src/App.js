import Home from './components/Home';
import Navbar from './components/Navbar';
import Email from './components/Email';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/email-form' element={<Email />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
