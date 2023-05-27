import BaseLayout from "../components/BaseLayout";



export default function register() {
  return (
    <BaseLayout>
    <div className="w-full flex flex-col">

      <div className="flex flex-col items-center h-[100vh] w-full">
        <div className="flex flex-row justify-between text-center">
          <h4 className="text-xl font-bold text-navy-700 mb-3 ">
            Crie sua conta
          </h4>
        </div>
        <div className="mb-3 w-full flex flex-col p-2">
          <label className="text-sm text-navy-700 font-bold">Email:</label>
          <input type="email" id="email" placeholder="exemplo@exemplo.com" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
        </div>
        <div className="mb-3 w-full flex flex-col p-2">
          <label className="text-sm text-navy-700 font-bold">Nome:</label>
          <input type="text" id="nome" placeholder="Digite seu nome" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
        </div>
        <div className="mb-3 w-full flex flex-col p-2">
          <label className="text-sm text-navy-700 font-bold">Idade:</label>
          <input type="text" id="nome" placeholder="Digite a sua idade" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
        </div>
        <div className="mb-3 w-full flex flex-col p-2">
          <label className="text-sm text-navy-700 font-bold">Senha:</label>
          <input type="password" id="nome" placeholder="Digite a sua senha" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
        </div>
        {/* <div className="mb-3">
          <label className="text-sm text-navy-700 font-bold">Nome:</label>
          <input type="text" id="email2" placeholder="Digite seu nome" className="mt-2 flex h-12  items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none" />
        </div>
        <div className="mb-3">
          <label className="text-sm text-navy-700 font-bold">Idade:</label>
          <input type="text" id="email2" placeholder="Digite sua idade" className="mt-2 flex h-12  items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none" />
        </div>
        <div className="mb-3">
          <label className="text-sm text-navy-700 font-bold">Senha:</label>
          <input type="password" id="email2" placeholder="Digite sua senha" className="mt-2 flex h-12  items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none" />
        </div> */}
        <button className="bg-[#5cb85c] text-white p-2 w-full">
          Criar
        </button>
      </div>
      <div>
      </div>
    </div>
</BaseLayout>
  )
}
