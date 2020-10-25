import React, {useContext} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {UserProvider, UserContext, GamesProvider, MoviesProvider} from './Context/Context'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Games from './Pages/Games'
import Movies from './Pages/Movies'
import DetailGames from './Pages/DetailGames'
import DetailMovies from './Pages/DetailMovies'
import ListGames from './Pages/ListGames'
import AddGames from './Pages/AddGames'
import EditGames from './Pages/EditGames'
import ListMovies from './Pages/ListMovies'
import AddMovies from './Pages/AddMovies'
import Register from './Pages/Register'
import Login from './Pages/Login'
import 'antd/dist/antd.css'

function Routes() {
  const [user] = useContext(UserContext);

  const PrivateRoute = ({user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({user, ...props }) =>
  user ? <Redirect to="/" /> : <Route {...props} />;

  return(
  <BrowserRouter>
  <Header/>
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
    <PrivateRoute exact path='/listgames' user={user}>
    <GamesProvider><ListGames/></GamesProvider>
    </PrivateRoute>
    <PrivateRoute exact path='/addgames' user={user}>
    <GamesProvider><AddGames/></GamesProvider>
    </PrivateRoute>
    <PrivateRoute exact path='/editgames/:id' user={user}>
    <GamesProvider><EditGames/></GamesProvider>
    </PrivateRoute>
    <PrivateRoute exact path='/listmovies' user={user}>
    <MoviesProvider><ListMovies/></MoviesProvider>
    </PrivateRoute>
    <PrivateRoute exact path='/addmovies' user={user}>
    <MoviesProvider><AddMovies/></MoviesProvider>
    </PrivateRoute>
    <LoginRoute exact path='/register' user={user} component={Register}/>
    <LoginRoute exact path='/login' user={user} component={Login}/>
  </Switch>
  <Footer/>
  </BrowserRouter>
  );
}

function App() {
  return(
    <UserProvider>
    <Routes/>
    </UserProvider>
  );
}

export default App;
