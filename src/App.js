import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import Courses from "./Components/Courses";
import { Link } from "react-router-dom";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <nav className="navbar">
        <ul>
          <li>
            <Link className="navbarlogo" to="/Home">
              <img
                src="data:image/jpeg;base64,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"
                alt="Logo"
                width="25"
                height="25"
              />
            </Link>
          </li>

          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li>
            <Link to="/">Branches</Link>
          </li>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <div className="search">
            <input type="text" name="search" id="search" placeholder="Search" />
          </div>
        </ul>
      </nav>
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Courses" element={<Courses />} />
  </Routes>
    </Router>
    </>
  );
}

export default App;
