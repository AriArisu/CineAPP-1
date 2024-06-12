import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function DetalhesFilme(){
    console.log(useParams())
    const {id} = useParams()

    const[filme, setFilmes] = useState({})

    useEffect( ()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch(error => console.log(error))
    },[])
    return(
        <>
        <h1>detalhes do filme</h1>

        <img src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} alt="" />

        <p>{filme.title}</p>
        <p>{filme.release_date}</p>
        <p>{filme.vote_average}</p>

        </>
    )
}

export default DetalhesFilme;