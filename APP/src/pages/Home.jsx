
import data from '../../artigos.json'
import Artigos from '../components/searchImput.jsx';
function Home() {
    const maisNova = data.slice(0,1);
    const destaques = data.slice(1, 6)


    return ( 
        <>

<Artigos/>
            <div className="noticiasNovas flex flex-row w-9/12 items-between">
            {maisNova.map((filme, index) => (
                    <div className="Noticiaprincipal card m-2 w-1/3" key={index}>
                        <h1>{filme.title}</h1>
                        {filme.image ? (
                            <img src={filme.image} alt={filme.title} />
                        ) : (
                            <h1 className='text-4xl'>Não tem imagem</h1>
                        )}
                        <div className='tags'>
                            {filme.tags.map(tag => (
                                <span className='bg-pink-800 text-white p-1 m-1' key={tag}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto'>
                            {filme.text.map((texto, idx) => (
                                <p key={idx}>{texto}</p>
                            ))}
                        </div>
                    </div>
                ))}
                <div className='flex flex-col'>
                {destaques.map((filme, index) => (
                    <div className="MaisNoticias card m-2 w-1/5" key={index}>
                        {filme.image ? (
                            <img src={filme.image} alt={filme.title} />
                        ) : (
                            <h1 className='text-4xl'>Não tem imagem</h1>
                        )}
                        <div>
                        <h1>{filme.title}</h1>
                        <div className='tags'>
                            {filme.tags.map(tag => (
                                <span className='bg-pink-800 text-white p-1 m-1' key={tag}>{tag}</span>
                            ))}
                        </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            <div className='noticiasGerais flex flex-row flex-wrap w-10/12'>
            {data.map((filme, index) => (
                    <div className="card m-2 w-1/4" key={index}>
                        <h1>{filme.title}</h1>
                        {filme.image ?
                            <img src={filme.image}></img>
                            :
                            <h1 className='text-4x1'>Não tem imagem</h1>
                        }
                        <div className='tags'>
                        {
                            filme.tags.map( tag =>(
                                <span className='bg-pink-800 text-white p-1 m-1' key={tag}>{tag}</span>
                            ))
                        }
                        </div>
                        <div className='texto'>
                        {
                            filme.text.map( texto =>(
                                <p key={texto}>{texto}</p>
                            )
                            )
                        }
                        </div>
                    </div>
                )
            )
        }
            </div>
        </>
     );
}

export default Home;