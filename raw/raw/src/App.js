import './App.css';
import { Contact } from './Contact';
import { Home } from './Home';
import { About } from './About';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      this is shoukath page
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Home />
        <About />
        <Contact /> */}
    </div>
  );
}
export default App;