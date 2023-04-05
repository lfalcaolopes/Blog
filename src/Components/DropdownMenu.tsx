import * as DropMenu from "@radix-ui/react-dropdown-menu";
import { List, MagnifyingGlass } from "@phosphor-icons/react";
import { Link, Outlet } from "react-router-dom";

function DropdownMenu() {
  return (
    <DropMenu.Root>
      <div className="sm:mr-12 mt-2 md:hidden">
        <DropMenu.Trigger asChild>
          <button aria-label="Customise options">
            <List size={28} weight="bold" />
          </button>
        </DropMenu.Trigger>
      </div>

      <DropMenu.Portal>
        <DropMenu.Content className="bg-custom-light-grey shadow-lg drop-shadow-lg rounded-md" sideOffset={5}>
          <DropMenu.Item className="px-4 py-2">
            <Link to="/">Home</Link>
          </DropMenu.Item>
          <DropMenu.Item className="px-4 py-2">
            <Link to="/#categorias">Categorias</Link>
          </DropMenu.Item>
          <DropMenu.Item className="px-4 py-2">
            <Link to="">Pesquisar</Link>
          </DropMenu.Item>
          <Outlet />
        </DropMenu.Content>
      </DropMenu.Portal>
    </DropMenu.Root>
  );
}

export default DropdownMenu;
