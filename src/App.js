import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { User } from './models/users.class';
import { useEffect, useState } from 'react';

import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import NotFoundPage from './Pages/NotFoundPage';
import ContactPage from './Pages/ContactPage';

function App() {

  const [logged, setLogged] = useState(null);

  const defaultUser = new User("inkev.ap@pruebas.com", "password");
  const [userList, setUsers] = useState([defaultUser]);

  const RegisterUsers = (user) => {
    let TempUserList = [...userList];
    TempUserList.push(user);
    setUsers(TempUserList);
  }

  const Logout = () => {
    localStorage.removeItem('credentials')
    setLogged(null)
  }

  const isLogged = (data) => {
    localStorage.setItem('credentials', data)
    setLogged(data)
  }

  useEffect(() => {
    setLogged(localStorage.getItem('credentials'));
  },[logged])

  return (
    <Router>
      <div className='App App-header'>
        <aside className='btn'>
          <Link to='/register'>| Register |</Link>
          <Link to='/login'>| Login ||</Link>
          <Link to='/'>| Contacts ||</Link>
        </aside>
        <main className='body'></main>
          <Routes>
            <Route path={"/"} element={
              (logged)
                ? <ContactPage Logout={Logout} />
                : <Navigate to='/login' replace />
                
            } />

            <Route path='/register' element={
              (logged !== null)
                ? <Navigate replace to='/' />
                : <RegisterPage Register={RegisterUsers} />
            } />

            <Route path='/login' element={
              (logged !== null)
                ? <Navigate replace to='/register'/>
                : <LoginPage UserList={userList} setLogged={isLogged} />
            } />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default App;
