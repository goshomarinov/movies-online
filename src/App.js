import './App.css';

import { Routes, Route } from 'react-router-dom';


import { Home } from './components/home-page/Home';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { TvShows } from './components/tv-shows/TvShows';
import { Details } from './components/details/Details';
import { TvShowDetails } from './components/details/TvShowDetails';
import { Player } from './components/player/Player';


function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tv' element={<TvShows />} />
        <Route path='/details/:id/:movie' element={<Details />} />
        <Route path='/details/:id/:type/:seasons' element={<TvShowDetails />} />
        <Route path='/play/:name' element={<Player />} />
        <Route path='/play/:name/:season/:episodes' element={<Player />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
