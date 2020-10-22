import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Headers from './Component/Header'
import Footers from './Component/Footer'
import Games from './Pages/Games'
import Movies from './Pages/Movies'
import DetailGames from './Pages/DetailGames'
import DetailMovies from './Pages/DetailMovies'
import ListGames from './Pages/ListGames'
import AddGames from './Pages/AddGames'
import {GamesProvider, MoviesProvider} from './Context/Context'
import 'antd/dist/antd.css'

function App() {
  return (
    <BrowserRouter>
    <Headers/>

    <Switch>
    <Route exact path='/'>
    <GamesProvider><Games/></GamesProvider>
    </Route>
    <Route exact path='/detailgames/:id'>
    <GamesProvider><DetailGames/></GamesProvider>
    </Route>
    <Route exact path='/movies'>
    <MoviesProvider><Movies/></MoviesProvider>
    </Route>
    <Route exact path='/detailmovies/:id'>
    <MoviesProvider><DetailMovies/></MoviesProvider>
    </Route>
    <Route exact path='/listgames'>
    <GamesProvider><ListGames/></GamesProvider>
    </Route>
    <Route path='/addgames' exact component={AddGames}/>
    </Switch>

    <Footers/>
    </BrowserRouter>
  );
}

export default App;
