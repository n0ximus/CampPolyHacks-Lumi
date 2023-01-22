import './App.css';
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import NavBar from "./components/navbar"
import WritePraise from "./pages/writePost/writePraise";
import WriteRant from "./pages/writePost/writeRant";
import PostPage from "./pages/PostPage.jsx"
let post =
  { "body": "hello world i am typing to make this have a new line so we can see what it looks like when you're able to go to new lines and stuff", 
  "stardust": 10, 
  "category": ["advice", "lgbtq+"]}



function App() {
  document.body.style = 'background: #31334A'

  return (
    <div className="App">
      <header className="App-header">
              <Router>
                  <NavBar />

                  <Routes>
                      <Route exact path="/" element={<Home />}> </Route>
                      <Route exact path="/post/:id" element={<PostPage post/>}>
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
