export default function Contato() {

    
  return (
    <div className="flex flex-col items-center justify-evenly">

    <h2 className="text-3xl font-bold text-gray-900 ">Contato</h2>
     <div className="flex flex-col w-1/2">   
      <form className="flex flex-col">
            <div className="flex flex-row w-full justify-between">
            <div className="PrimeiroNome w-2/5">
            <label className="text-sm font-semibold leading-6 text-gray-900">
              Primeiro nome
            </label>

              <input
                type="text"
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm"
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
                type="text"
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm"
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
