function NavBarComponent() {
  return (
    <div className="flex items-center bg-[#0f1b20] text-white py-5 px-10 shadow-md">

      {/* Logo / Home */}
      <button className="bg-[#1b3a4b] px-5 py-2 rounded-xl 
                         hover:bg-[#245166] 
                         transition-all duration-300">
        HOME
      </button>

      {/* Menu da direita */}
      <div className="flex gap-6 ml-auto">
        <button className="px-4 py-2 rounded-xl 
                           hover:bg-[#1b3a4b] 
                           transition-all duration-300">
          Sobre nós
        </button>

        <button className="px-4 py-2 rounded-xl 
                           hover:bg-[#1b3a4b] 
                           transition-all duration-300">
          Projetos
        </button>
      </div>

    </div>
  )
}

export default NavBarComponent