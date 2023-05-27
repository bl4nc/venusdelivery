import React from 'react'
import { BsFillPencilFill } from "react-icons/bs";

const dados = {
nome:"Rafael",
tel:"75991787918",
id:"1",
}

export default function page() {
    return (
        <div className=''>
            <div className="md:px-32 py-8 w-full ">
                <div className="shadow overflow rounded border-b border-gray-200">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nome</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Telefone</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">#</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="w-1/3 text-left py-3 px-4">Teste</td>
                                <td className="w-1/3 text-left py-3 px-4">75-5555</td>
                                <td className="text-left py-3 px-4">
                                    <button>
                                        <BsFillPencilFill />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
