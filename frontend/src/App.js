import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import NavBar from './components/Navbar';
import LanguageLinkComponent from './components/languages/LanguageLinkComponent';
import NotFound from './components/not_found/NotFound';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
          <Route path='/not-found' element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
