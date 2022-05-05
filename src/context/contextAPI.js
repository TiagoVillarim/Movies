import React, { useState } from "react";

export const userContext = React.createContext({});


export const UserProvider = (props) => {

    const [movies, setMovies] = useState([]);

    const [signIn, setSignIn] = useState([]);

    const [login, setLogin] = useState({});

    const [selectedMovie, setSelectedMovie] = useState([]);


  return (
    <userContext.Provider value={{
        movies, setMovies,
        login, setLogin,
        signIn, setSignIn,
        selectedMovie, setSelectedMovie
    }}>

      {props.children}
    </userContext.Provider>
  )
};