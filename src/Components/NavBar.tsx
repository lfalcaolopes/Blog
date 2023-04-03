import { MagnifyingGlass } from "@phosphor-icons/react";
import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  return (
    <div
      id="navbar"
      className="flex justify-between items-center h-16 bg-custom-off-white shadow-md drop-shadow-md px-4 md:px-12 xl:px-24"
    >
      <Link to="/" className="font-jakarta font-semibold text-4xl text-sky-900">
        Vitalidade <span className="sub-heading1 text-custom-blue">Viva</span>
      </Link>
      <div className=" space-x-8 text-custom-black parag-bold hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/#categorias">Categorias</Link>
        <a href="" className="flex space-x-2">
          <MagnifyingGlass />
          <p> Pesquisar</p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
