import logo from './assets/logo.png';
import './App.css';
import Menu from './menu';
import Activity from './pages/drivers/activity';

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
          <Activity/> 
        </main>
      </div>
    </div>
  );
}

export default App;
