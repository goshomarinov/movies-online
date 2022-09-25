import './App.css';

import { Routes, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { Home } from './components/home-page/Home';
import { Header } from './components/header/Header';


function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
