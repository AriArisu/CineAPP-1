import data from '../../artigos.json'

function Home() {
    return ( 
        <>
        <div className="grid grid-cols-3">
        {
            data.map(
                (filme, index)=>(
                    <>
                    <div className="card m-2" key={index}>
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
                    </>
                )
            )
        }  
        
        </div>
        </>
     );
}

export default Home;