import './App.css';
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"

function App() {
  document.body.style = 'background: #31334A;';

  return (
    <div className="App">
      <header className="App-header">
              <Router>
                  <Routes>
                      <Route exact path="/" element={<Home />}>
                      </Route>
                  </Routes>
              </Router>
      </header>
    </div>
  );
}

export default App;