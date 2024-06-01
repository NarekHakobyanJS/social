
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';




function App() {
  return (
    <div className="App">
      <Header />
      <div className='AppContent'>
        <Nav />
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs' element={<DialogsContainer/>} />
          <Route path="/users" element={<UsersContainer />}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
