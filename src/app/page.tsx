import Image from 'next/image'
import Navbar from './components/Navbar'
import img_hambuguer from "../assets/hamburger.png"
import img_bebidas from "../assets/bebidas.png"
import { BsMapFill } from "react-icons/bs";
import img_venus from "../assets/venus_deusa.png"
import Whatsapp from './components/Whatsapp/Whatsapp';

export default function Home() {
  return (

    <div id='content' className='w-full'>
      <div className='flex justify-center text-center my-4 p-2'>
        <p className='font-semibold text-2xl'>Faça sua voz ser ouvida de forma segura e anônima.</p>
      </div>
      {/* <div className='p-4 flex gap-y-1 flex-col'>
          <div>
            <p className='text-sm text-gray-700 font-semibold'>Busque restaurantes em sua região</p>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsMapFill />
            </div>
            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full pl-10 p-2.5  " placeholder="Digite o seu endereço" />

          </div>
          <button className="bg-[#EA1d2c] px-4 w-full rounded text-white py-2 text-sm shadow-md">
            Buscar restaurantes
          </button>
          <div>
          </div>
        </div> */}
      <div className="flex flex-row flex-wrap justify-around gap-y-2 p-2">
        <div className='card-venus flex flex-row items-center p-2  bg-[#f9ca0c] rounded-xl w-full shadow'>
          <p className='text-justify p-1 w-3/4 text-white'>Nosso aplicativo de denúncias anônimas oferece a todos a oportunidade de compartilhar informações importantes sem revelar sua identidade.</p>
          <Image alt='Imagem' width={300} height={150} src={img_venus} className='opacity-10 w-1/4'></Image>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-around gap-y-2 p-2">
        <div className='card-venus flex flex-row items-center p-2  bg-[#c665c6] rounded-xl w-full shadow'>
          <Image alt='Imagem' width={300} height={150} src={img_venus} className='opacity-10 w-1/4'></Image>
          <p className='w-3/4 text-white text-justify p-1 font-sm'>Nosso aplicativo de denúncias anônimas oferece a todos a oportunidade de compartilhar informações importantes sem revelar sua identidade</p>
        </div>
      </div>
    </div>
  )
}
