import logo from './logo.svg';
import './App.css';
import ContactListComponent from './Components/container/contact_list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='body'>
        <ContactListComponent></ContactListComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
