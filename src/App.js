import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Headers from './Component/Header'
import Footers from './Component/Footer'
import Games from './Pages/Games'
import DetailGames from './Pages/DetailGames'
import {GamesProvider} from './Context/GamesContext'
import 'antd/dist/antd.css'

function App() {
  return (
    <BrowserRouter>
    <Headers/>

    <Switch>
    <GamesProvider>
    <Route path='/' exact component={Games}/>
    <Route path='/detailgames/:id' exact component={DetailGames}/>
    </GamesProvider>
    </Switch>

    <Footers/>
    </BrowserRouter>
  );
}

export default App;
