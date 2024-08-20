import { useState } from "react";
import data from '../../artigos.json';

const Artigos = () =>{

const [nome,setNome] = useState ('')//nome = valor campo de busca  ---  setNome =atualiza valor do nome 
const [filtrado, setFiltrado] = useState([]) // filtrado =  artigos filtrados ---- setdiltrado = atualiza os artigos .

const Escrever = (e) => {
    const procura = e.target.value.toLowerCase();
    setNome(procura);

    const Resultados = data.filter((article) => (
        article.title.toLowerCase().includes(procura)

    ))

    setFiltrado(Resultados);
}



return(
    <>
      <input 
    type='text'
    name='nome'
    id='nome'
    value={nome}
    onChange={Escrever} 
    placeholder='PeekABoo'/> 

<div className="pb-20 sm:mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-[1600px]">
        {nome.length > 0 ?

             filtrado.map((article,index) => (  
                <div className="card m-2 w-1/4" key={index}>
                <h1>{article.title}</h1>
                    <img src={article.image}></img>
                <div className='tags'>
                {
                    article.tags.map((tag) =>(
                        <span className='bg-pink-800 text-white p-1 m-1' key={tag}>{tag}</span>
                    ))
                }
                </div>
                <div className='texto'>
                {
                    article.text.map(( texto, idx) =>(
                        <p key={idx}>{texto}</p>
                    )
                    )
                }
                </div>
            </div>)) : 
                 <p className='text-xl col-span-3 mt-4 text-center dark:text-white'>Nenhum Artigo Encontrado 😔 </p> 
             } 
    </div>

    </>
)}
export default Artigos;
