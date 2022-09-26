import './App.css';

import { Routes, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { Home } from './components/home-page/Home';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { TvShows } from './components/tv-shows/TvShows';


function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tv' element={<TvShows />} />
      <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
