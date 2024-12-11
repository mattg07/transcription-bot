
import './App.css'
import Navbar from './components/Navbar';
import SignUp from './components/SignUp'
import SignIn from './components/SigIn';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fetch from './components/Fetch';

function App() {

  return (
    <Router>
      <div className="m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
