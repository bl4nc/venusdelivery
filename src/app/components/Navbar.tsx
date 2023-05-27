'use client'

import logo from "../../assets/logo_.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Navbar() {
const router = useRouter()
    return (
        <div className="flex flex-row items-center gap-4 w-full py-8 ">
            <div className="ml-4">
                <div onClick={() => router.push('/')}>
                    <Image src={logo} width={120} height={45} alt="logo"></Image>
                </div>
            </div>

            <div className="ml-auto gap-4 mr-4 font-semibold">
                <button onClick={() => router.push('/login')} className=" text-white bg-[#EA1d2c] py-2 px-10 text-sm rounded shadow-md">
                    Login
                </button>
            </div>
        </div>
    )
}
