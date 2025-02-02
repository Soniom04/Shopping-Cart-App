
import { Route , Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart'  element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
