import { useNavigate, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<Home navigate={ useNavigate() }/>}/>
        <Route path='/home' element={<Home navigate={ useNavigate() } />} /> 
        <Route path='/about' element={<About navigate={ useNavigate() }/>}/> 
        <Route path='/contact' element={<Contact navigate={ useNavigate() }/>}/>
        <Route path='/blog' element={<Blog navigate={ useNavigate() }/>}/>
        <Route path='*' element={<NoPage  navigate={ useNavigate() }/>}/>
      </Routes>
    </div>
  );
}

export default App;
