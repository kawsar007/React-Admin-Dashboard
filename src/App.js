import Sidebar from './Components/sidebar/Sidebar';
import Topbar from './Components/topbar/Topbar';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
         <Sidebar/>
         <Home/>
      </div>
    </div>
  );
}

export default App;
