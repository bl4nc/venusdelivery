


export default function register() {
  return (
    <div>

      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] bg-white undefined">

          <div className="relative flex flex-row justify-between text-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white mb-3 ">
              Crie sua conta
            </h4>
          </div>
          <div className="mb-3">
            <label className="text-sm text-navy-700 dark:text-white font-bold">Email:</label>
            <input type="text" id="email" placeholder="exemplo@exemplo.com" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200" />
          </div>
          <div className="mb-3">
            <label className="text-sm text-navy-700 dark:text-white font-bold">Nome:</label>
            <input type="text" id="email2" placeholder="Digite seu nome" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none" />
          </div>
          <div className="mb-3">
            <label className="text-sm text-navy-700 dark:text-white font-bold">Idade:</label>
            <input type="text" id="email2" placeholder="Digite sua idade" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none" />
          </div>
          <div className="mb-3">
            <label className="text-sm text-navy-700 dark:text-white font-bold">Senha:</label>
            <input type="password" id="email2" placeholder="Digite sua senha" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none" />
          </div>
        </div>
      <div>
        <button className="">
          Criar
          </button></div>
      </div>
     
    </div>


  )
}
