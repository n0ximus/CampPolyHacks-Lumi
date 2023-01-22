import './App.css';
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import NavBar from "./components/navbar"
import WritePost from "./pages/writePost/writePost";

function App() {
  document.body.style = 'background: #31334A;';

  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
              <Router>
                  <Routes>
                      <Route exact path="/" element={<Home />}>
                      </Route>
                      <Route exact path="/writePost" element={<WritePost />}>
                      </Route>
                  </Routes>
              </Router>
      </header>
    </div>
  );
}

export default App;