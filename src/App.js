import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Search from './Components/Search';

function App() {
  return (
    <div >
      <Add/>
      <Search/>
    </div>
  );
}

export default App;
