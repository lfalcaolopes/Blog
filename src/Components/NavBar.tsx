import { MagnifyingGlass } from "@phosphor-icons/react";

function NavBar() {
  return (
    <div className="flex justify-between items-center h-16 bg-custom-off-white shadow-md drop-shadow-md px-24">
      <p className="font-jakarta font-semibold text-4xl text-sky-900">
        Vitalidade <span className="sub-heading1 text-custom-blue">Viva</span>
      </p>
      <div className="flex space-x-8 text-custom-black parag-bold">
        <a href="">Home</a>
        <a href="">Categorias</a>
        <a href="">Sobre Mim</a>
        <a href="" className="flex space-x-2">
          <MagnifyingGlass />
          <p> Pesquisar</p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
