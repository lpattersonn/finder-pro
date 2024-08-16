import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Components/Home.jsx";
import FirstPage from "./Components/FirstPage.jsx";
import SecondPage from "./Components/SecondPage.jsx";
import ThirdPage from "./Components/ThirdPage.jsx";
import FinalPage from "./Components/FinalPage.jsx";
import Congratulations from "./Components/Congratulations.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/final-page" element={<FinalPage />} />
        <Route path="/congratulations" element={<Congratulations />} />
      </Routes>
   </Router>
  );
}

export default App;
