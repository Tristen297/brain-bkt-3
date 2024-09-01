import Navbar from './components/navbar/navbar.js';
import LogoHeader from "./components/navbar/logo-header.js";
import Home from './components/home/home.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <LogoHeader />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
