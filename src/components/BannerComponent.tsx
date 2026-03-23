import home from "../assets/home.png"
import HamburguerMenuComponent from "./HamburguerMenuComponent";

function BannerComponent(){

    return(
        <>
<div className="relative h-screen bg-cover bg-center "  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${home})`
  }}>
   

  <div className="h-screen flex flex-col items-center justify-center text-white gap-8">
    
<h1
  className="
    text-5xl md:text-7xl
    font-yeseva
    tracking-widest
    text-[#F6F4F0]
    drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]
    transition-all duration-500

    hover:scale-110
    hover:tracking-[0.2em]

    hover:text-transparent
    hover:bg-clip-text
    hover:bg-gradient-to-r
    hover:from-[#E9F0C9]
    hover:via-[#3B657A]
    hover:to-[#123142]
  "
>
  NEXUS
</h1>

  <div className="flex gap-6">

    {/* Botão Principal */}
   <h1 style={{ fontFamily: 'Open Sans, sans-serif' }} >Seu marketing completo de baixo de um único teto</h1>

    {/* Botão Secundário */}
    

  </div>

</div>



    
    </div>
        
        </>
    );

}

export default BannerComponent;