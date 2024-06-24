import data from '../../artigos.json'

function Home() {
    const destaques = data.slice(0, 6);

    return ( 
        <>
            <div className="grid grid-cols-3">
                {destaques.map((filme, index) => (
                    <div className="card m-2" key={index}>
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
            </div>
        </>
     );
}

export default Home;