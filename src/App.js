
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from "./pages/Product";
import Login from './components/Login';
function App() {
  return (
  <BrowserRouter>
  <Link to='/'></Link>
  <Link to='/About'></Link>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path="/product/:id" element={<Product />}/>
  <Route path="/login" element={<Login/>} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;
