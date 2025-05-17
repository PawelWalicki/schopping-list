import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import { HomePage } from './pages/HomePage';
import { Registration } from './pages/Registration';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
