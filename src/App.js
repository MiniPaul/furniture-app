import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Search from './Components/Search';
import View from './Components/View';

function App() {
  return (
    <div >
      <Add/>
      <Search/>
      <View/>
    </div>
  );
}

export default App;
