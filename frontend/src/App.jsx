import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Paage from "./pages/page";

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<HomePage />}/>
        <Route path="/game" element={<HomePage />}/>
        <Route path="/note" element={<HomePage />}/>
        <Route path="/article" element={<HomePage />}/>
        <Route path="/contact" element={<HomePage />}/>
        <Route path="/login" element={<HomePage />}/>
        <Route path="/register" element={<HomePage />}/>
        <Route path="/lala" element={<Paage />}/>
      </Routes>
    </Router>
  )
}

export default App
