import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [hoveredMovie, setHoveredMovie] = useState(null);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(error => console.log(error))
    }, []);

    // Função para obter a URL da imagem de fundo do filme hovered
    const getHoveredImageUrl = () => {
        const hoveredFilm = filmes.find(filme => filme.id == hoveredMovie);
        if (hoveredFilm) {
            return `https://image.tmdb.org/t/p/original/${hoveredFilm.backdrop_path}`;
        }
    }

    return (
        <>
            <div className='banner flex flex-col justify-center items-center'
                 style={{ backgroundImage: hoveredMovie ? `url(${getHoveredImageUrl()})` : '' }}
            >
                <div className='flex flex-row overflow-x-scroll space-x-4 h-auto w-10/12 px-4 py-2 mb-4'>
                    {filmes.map(filme => (
                        <div 
                            key={filme.id}
                            className='cardFilme flex flex-col w-1/5 flex-shrink-0 justify-center items-center relative'
                            onMouseEnter={() => setHoveredMovie(filme.id)}
                            onMouseLeave={() => setHoveredMovie(null)}
                        >
                            <img src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} className='w-1/2 h-auto' alt={filme.title} />
                            <h1 className='whitespace-nowrap'>{filme.title}</h1>
                            <Link to={`${filme.id}`} className='bg-purple-800 text-center block p-2 m-1 text-white'>Saiba Mais</Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='ListaFilmes flex flex-row gap-3 flex-wrap justify-center'>
                {filmes.map(filme => (
                    <div className="cardFilme flex flex-col w-1/4" key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} className='w-full h-auto' alt={filme.title} />
                        <h1 className='wraptext-wrap'>{filme.title}</h1>
                        <Link to={`${filme.id}`} className='bg-purple-800 text-center block p-2 m-1 text-white'>Saiba Mais</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Filmes;