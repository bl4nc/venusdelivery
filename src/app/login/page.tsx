import BaseLayout from "@/app/components/BaseLayout";
import { useState } from "react";

const [email, setEmail] = useState<string>("");
const [senha, setSenha] = useState<string>("");

async function login() {

}

export default function register() {
  return (
    <BaseLayout>
      <div className="w-full flex flex-col">
        <div className="flex flex-col items-center h-[100vh] w-full">
          <div className="flex flex-row justify-between text-center">
            <h4 className="text-xl font-bold text-navy-700 mb-3 ">
              Login
            </h4>
          </div>

          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">E-mail:</label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" placeholder="Digite seu email" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <div className="mb-3 w-full flex flex-col p-2">
            <label className="text-sm text-navy-700 font-bold">Senha:</label>
            <input value={senha} type="password" onChange={(e) => { setSenha(e.target.value) }} id="senha" placeholder="Digite sua senha" className="mt-2 h-12 items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-gray-200" />
          </div>
          <button className="bg-[#5cb85c] text-white p-2 w-full">
            Entrar
          </button>
        </div>
        <div>
        </div>
      </div>
    </BaseLayout>

  )
}
