import Image from 'next/image'
import "./Whatsapp.css"
import { BsWhatsapp } from "react-icons/bs";

export interface WhatsApp {
  url: string;
}

export default function Whatsapp(props: WhatsApp) {
  return (
    <div className="flex z-50 pulsaDelay btn-whatsapp">
      <a href="" target="_blank">
        <div className="bg-[#25d366] p-4 rounded-full  text-white">
          <BsWhatsapp className=''/>
          {/* <i class="fa fa-whatsapp"></i> */}
        </div>
      </a>
    </div>
  )
}
