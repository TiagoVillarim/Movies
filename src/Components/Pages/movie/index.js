import React from "react";
import { userContext } from "../../../context/contextAPI";
import style from "./style.scss";
import { useNavigate } from "react-router-dom";


export default function Movie() {

    let navigate = useNavigate()

    const {
        selectedMovie
    } = React.useContext(userContext);

    const backHome = () => {
        navigate("/home")
    }

    return (
        <section className="section-container-movie">
            <header className="header-movie">
                <h1>
                    Cine-React
                    <img src="https://cdn.iconscout.com/icon/free/png-512/popcorn-1751514-1489363.png" className="popcorn-movie" />
                </h1>
                <p onClick={() => backHome()}>Back home</p>
            </header>
            <div className="movie-container">
                <div className="section-movie">
                    <img src={selectedMovie.poster_path} className="movie-poster" />
                    <div className="texts-container">
                        <p className="movie-title"><strong>Movie title : </strong>{selectedMovie.title}</p>
                        <p className="movie-date"><strong>Release date : </strong>{selectedMovie.release_date}</p>
                        <p className="movie-overview"><strong>Overview : </strong>{selectedMovie.overview}</p>
                        <a href={selectedMovie.video} target="_blank" className="button-trailer"><strong>Movie trailer</strong></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

//adicionar botão para trailer no map