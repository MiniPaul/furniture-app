import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Search from './Components/Search';
import View from './Components/View';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/search' element={<Search/>} />
        <Route path='/view' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
