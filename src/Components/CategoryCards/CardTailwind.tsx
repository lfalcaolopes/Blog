import { SiTailwindcss } from "react-icons/si";

function CardTailwind() {
  return (
    <div className="flex flex-col space-y-8 bg-white w-[15rem] h-[20rem] px-4 pt-12 rounded-lg">
      <SiTailwindcss className="h-16 w-16 p-2 rounded-md text-[#2298BD] bg-white" />

      <h3 className="sub-heading1">Tailwind</h3>
    </div>
  );
}

export default CardTailwind;
