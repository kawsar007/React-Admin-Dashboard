import Sidebar from './Components/sidebar/Sidebar';
import Topbar from './Components/topbar/Topbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
         <Sidebar/>
         <div className="other">
           Other Page
          </div>
      </div>
    </div>
  );
}

export default App;
