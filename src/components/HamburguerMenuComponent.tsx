import { useState } from "react";


function HamburguerMenuComponent(){
   // const [open, setOpen] = useState(false);
    return(
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full flex justify-center">
  <nav className="flex items-center
                  bg-white text-black 
                
                  rounded-3xl 
                  border 
                  shadow-lg 
                  w-[70%] max-w-6xl
                  ">

    <div className="flex items-center mx-auto">

      <button className="px-8 py-2 rounded-xl hover:bg-gray-100 transition-all text-[#3B657A]" style={{ fontFamily: 'Yeseva One, serif' }}>
        HOME
      </button>



      <button className="px-8 py-2 rounded-xl hover:bg-gray-100 transition-all text-[#3B657A]" style={{ fontFamily: 'Yeseva One, serif' }}>
        Sobre nós
      </button>

     

      <button className="px-8 py-2 rounded-xl hover:bg-gray-100 transition-all text-[#3B657A]" style={{ fontFamily: 'Yeseva One, serif' }} >
        Serviços
      </button>

     

      <button className="px-8 py-2 rounded-xl hover:bg-gray-100 transition-all text-[#3B657A]" style={{ fontFamily: 'Yeseva One, serif' }}>
        Contatos
      </button>

      <button className="px-8 py-2 rounded-xl hover:bg-gray-100 transition-all text-[#3B657A]" style={{ fontFamily: 'Yeseva One, serif' }}>
        Projetos
      </button>

    </div>

  </nav>
</div>

    )

}



export default HamburguerMenuComponent;