import './App.css';
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import NavBar from "./components/navbar"
import WritePraise from "./pages/writePost/writePraise";
import WriteRant from "./pages/writePost/writeRant";

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
                      <Route exact path="/writePraise" element={<WritePraise />}>
                      </Route>
                      <Route exact path="/writeRant" element={<WriteRant />}>
                      </Route>
                  </Routes>
              </Router>
      </header>
    </div>
  );
}

export default App;