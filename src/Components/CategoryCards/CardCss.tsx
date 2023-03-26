import { SiCss3 } from "react-icons/si";

function CardCss() {
  return (
    <div className="flex flex-col space-y-8 bg-white w-[15rem] h-[20rem] px-4 pt-12 rounded-lg">
      <SiCss3 className="h-16 w-16 p-2 rounded-md text-[#264de4] bg-white" />

      <h3 className="sub-heading1">CSS</h3>
    </div>
  );
}

export default CardCss;
