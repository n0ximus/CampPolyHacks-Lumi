import './App.css';
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import WritePost from "./pages/writePost/writePost";

function App() {
  return (
    <div className="App">
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