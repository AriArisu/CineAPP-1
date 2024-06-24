import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( ()=> {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return ( 
        <>
                <div className='banner flex flex-row overflow-x-scroll space-x-4 h-72 w-full'>
            {
                filmes.map(
                    filme =>(
                        <div className="cardFilme flex flex-col w-1/4" key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} className='w-full h-auto' />
                        <h1 className='wraptext-wrap'>{filme.title}</h1>
                        <Link to={`${filme.id}`} className='bg-purple-800 text-center'>Saiba Mais</Link>
                    </div>                   
                    )
                )
            }
        </div>


        <div className='ListaFilmes flex flex-row gap-3 flex-wrap'>
            {
                filmes.map(
                    filme =>(
                        <div className="cardFilme flex flex-col w-1/4" key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} className='w-full h-auto' />
                        <h1 className='wraptext-wrap'>{filme.title}</h1>   
                        <Link to={`${filme.id}`} className='bg-purple-800'>Saiba Mais</Link>
                        </div>                      
                    )
                )
            }
        </div>

        </>
     );
}

export default Filmes;