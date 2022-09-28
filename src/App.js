import logo from './logo.svg';
import './App.css';
import ContactListComponent from './Components/container/contact_list'
import Clockfuncional from './Components/pure/clockfuncional'
import Clock from './Components/pure/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ContactListComponent></ContactListComponent> */}
        <Clockfuncional></Clockfuncional>
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
