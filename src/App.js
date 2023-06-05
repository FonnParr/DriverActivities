import logo from './assets/logo.png';
import './App.css';
import Menu from './menu';
import Activity from './pages/drivers/activity';
import Home from './pages/home';
import About from './pages/about';
import Vehicles from './pages/vehicles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />     
      </header>
      <div className='pageBody'>
        <nav>
          <Menu/>
        </nav>
        <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/drivers" element={<Activity />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="*" element={<div >404</div>} />
          </Routes>
        </BrowserRouter>
        </main>
      </div>
    </div>
  );
}

export default App;
