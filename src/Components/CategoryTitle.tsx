import { CaretDoubleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function CategoryTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-between  sm:space-x-0 py-4 sub-heading2 sm:text-2xl text-custom-black">
      <div className="flex space-x-4 items-center ">
        <p className="">{title}</p>

        <div className="h-[5px] w-8 border-b-2 hidden sm:block border-custom-black"></div>
      </div>

      <Link to={"/categoria/" + title} className="flex text-end space-x-2 items-center ">
        <p className="w-[7.2rem] sm:w-auto">Ver todos</p>
        <CaretDoubleRight weight="bold" />
      </Link>
    </div>
  );
}

export default CategoryTitle;
