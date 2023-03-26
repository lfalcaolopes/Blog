import { SiVuedotjs } from "react-icons/si";

function CardVue() {
  return (
    <div className="flex flex-col space-y-8 bg-white w-[15rem] h-[20rem] px-4 pt-12 rounded-lg">
      <SiVuedotjs className="h-16 w-16 p-2 rounded-md text-[#35495E] bg-white" />

      <h3 className="sub-heading1">Vue JS</h3>
    </div>
  );
}

export default CardVue;
