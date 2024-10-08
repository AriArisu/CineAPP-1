import {useState} from 'react';
import emailjs from '@emailjs/browser';
export default function Contato() {

  const [nome1, setPrimeiroNome] = useState('');
  const [nome2, setSegundoNome] = useState('');
  const [Assunto, setAssunto] = useState('');
  const [email, setEmail] = useState('');
  const [menssagem, setMenssagem] = useState('');


function sendEmail(e){
    e.preventDefault();

    if (nome1 === '' || nome2 === '' || Assunto === '' || email === '' || menssagem === '') {
      alert('Todos os campos devem ser preenchidos.');
      return;
    }

    const templateParams = {
      from_name: nome1 + ' ' + nome2,
      subject: Assunto,
      email: email,
      message: menssagem
    };

  emailjs.send("service_3hkd7w5","template_4cg4y3o",templateParams,"GHAB1yg5gsZk19BmA")
  .then(response => {
    console.log('Email enviado com sucesso:', response);
  })
  .catch(error => {
    console.error('Erro ao enviar email:', error);
  });
}
  return (
    <div className="flex flex-col items-center justify-evenly">

    <h2 className="text-3xl font-bold text-gray-900 m-11">Contato</h2>
     <div className="flex flex-col w-3/4 bg-primary bottom-0 p-20 border-8 border-primary rounded-t-3xl">   
      <form className="flex flex-col" onSubmit={sendEmail}>
            <div className="flex flex-row w-full justify-between">
            <div className="PrimeiroNome w-2/5">
            <label className="text-sm font-semibold leading-6 text-gray-900">
              Primeiro nome
            </label>

              <input
                type="text"
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm"
              onChange={(e) => setPrimeiroNome(e.target.value)}
              value={nome1}
              />
              
          </div>
          <div className="SegundoNome w-2/5">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Ultimo nome
            </label>
            <div className="mt-2.5">
              <input
                type="text"  
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm"
                onChange={(e) => setSegundoNome(e.target.value)}
                value={nome2}
              />
            </div>
          </div>
            </div>
            <div className="flex flex-row w-full justify-between">
            <div className="Email w-2/5">
            <label className="text-sm font-semibold leading-6 text-gray-900">
              E-mail
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
          <div className="Assunto w-2/5">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Assunto
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm"
                onChange={(e) => setAssunto(e.target.value)}
                value={Assunto}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setMenssagem(e.target.value)}
                value={menssagem}
              />
            </div>
          </div>
        <div className="mt-10">
            <button type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">mandar</button>
        </div>
      </form>
      </div>
    </div>
  )
}

