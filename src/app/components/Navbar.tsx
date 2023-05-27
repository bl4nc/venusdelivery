import logo from "../../assets/logo_.png"
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="flex flex-row items-center gap-4 w-full py-8 ">
            <div className="ml-4">
                <div>
                    <Image src={logo} width={120} height={45} alt="logo"></Image>
                </div>
            </div>

            <div className="ml-auto gap-4 mr-4 font-semibold">
                {/* <button className=" px-2 rounded">
                    Faq
                </button> */}
                <button className=" text-white bg-[#EA1d2c] py-2 px-10 text-sm rounded shadow-md hover:px-3">
                    Login
                </button>
            </div>
        </div>
    )
}
