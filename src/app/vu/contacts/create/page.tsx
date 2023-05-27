export default function register() {
  return (
    
    <div className="w-full flex flex-col">

      <div className="flex flex-col items-center h-[100vh] w-full">
        <div className="flex flex-row justify-between text-center">
          <h4 className="text-xl font-bold text-navy-700 mb-3 ">
            Cadastre o contato
          </h4>
        </div>
        <div className="mb-3 w-full flex flex-col p-2">
          <label className="text-sm text-navy-700 font-bold">Nome:</label>
          <input type="text" id="nome" placeholder="Digite seu nome" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
        </div>
        <div className="mb-3 w-full flex flex-col p-2">
          <label className="text-sm text-navy-700 font-bold">Numero:</label>
          <input type="text" id="nome" placeholder="Digite o numero" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
        </div>
        <div className="mb-3 w-full flex flex-col p-2">
          <label className="text-sm text-navy-700 font-bold">Mensagem:</label>
          <textarea  rows={10} cols={40}  id="nome" placeholder="Digite uma mensagem pre definida" className="mt-2 h-20 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
        </div>
        <button className="bg-[#5cb85c] text-white p-2 w-full">
          Criar
        </button>
      </div>
      <div>
      </div>
    </div>

  )
}
