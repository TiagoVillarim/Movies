import React, { useEffect, useState } from "react";
import { userContext } from "../../../context/contextAPI";
import servicesAPI from "../../../Services/servicesAPI";
import styles from "./style.scss";
import { useNavigate } from "react-router-dom";



export default function Home() {

    let navigate = useNavigate();

    const [searchMovie, setSearchMovie] = useState()

    const {
        movies,
        setMovies,
        selectedMovie,
        setSelectedMovie
    } = React.useContext(userContext);


    useEffect(() => {
        async function fetchData() {
            const response = await servicesAPI.get("/movies");
            setMovies(response.data)
            console.log(response)
        }
        fetchData()
    }, []);

    const getId = (movie) => {
        setSelectedMovie(movie)
        navigate('/movie')
    }


    return (
        <section>
            <header className="header">
                <h1 className="header-title">
                    Cine-React
                    <img src="https://cdn.iconscout.com/icon/free/png-512/popcorn-1751514-1489363.png" className="popcorn" />
                </h1>
                <div className="search-bar">
                    <input
                        type="text"
                        value={searchMovie}
                        placeholder="search"
                        onChange={e => setSearchMovie(e.target.value)}
                    />
                </div>
            </header>

            <div className="section-home-container">
                {movies.filter((movie) => {
                    if (searchMovie === undefined) {
                        return movie
                    } else if (movie.title.toLowerCase().includes(searchMovie.toLowerCase())) {
                        return movie
                    }
                }).map((movie, index) => {
                    return (
                        <div className="movies-container" key={index}>
                            <img className="movie-poster" id={movie.id} src={movie.poster_path} onClick={() => getId(movie)} />
                            <p>{movie.title}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}