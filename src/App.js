import './App.css';
import Blogs from './pages/Blogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
