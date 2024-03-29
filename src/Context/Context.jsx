import React, {useState, createContext, useEffect} from "react";
import axios from 'axios'

export const GamesContext = createContext();
export const MoviesContext = createContext();
export const UserContext = createContext();

export const GamesProvider = props => {
  const currentGames = JSON.parse(localStorage.getItem("id"))
  const iniateGames = currentGames ? currentGames : null
  const [games, setGames] =  useState(iniateGames)

    useEffect( () => {
        if (games === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-game`)
          .then(res => {
              setGames(res.data.map(item=>{ return {
                id: item.id, 
                title: item.name, 
                genre: item.genre,
                year: item.release,
                image: item.image_url,
                singlePlayer: item.singlePlayer,
                multiPlayer: item.multiplayer,
                platform: item.platform
              }
            }))
          })
        }
      }, [games])

      return(
          <GamesContext.Provider value={[games, setGames]}>
              {props.children}
          </GamesContext.Provider>
      );
}

export const MoviesProvider = props => {
  const [movies, setMovies] =  useState(null) 

  useEffect( () => {
      if (movies === null){
        axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
        .then(res => {
            setMovies(res.data.map(item=>{ return {
              id: item.id, 
              title: item.title, 
              genre: item.genre,
              year: item.year,
              rating: item.rating,
              duration: item.duration,
              image: item.image_url,
              review: item.review,
              description: item.description
            }
          }))
        })
      }
    }, [movies])

    return(
        <MoviesContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MoviesContext.Provider>
    );
}

export const UserProvider = props => {
  const currentUser = JSON.parse(localStorage.getItem("user"))
  const iniateUser = currentUser ? currentUser : null
  const [user, setUser] = useState(iniateUser);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
